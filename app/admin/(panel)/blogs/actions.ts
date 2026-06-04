"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";
import { saveUpload } from "@/lib/upload";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 80);

function revalidate() {
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/admin/blogs");
}

async function parseForm(formData: FormData) {
  const uploaded = await saveUpload(formData.get("image") as File | null);
  const image = uploaded ?? String(formData.get("image__current") ?? "");
  const title = String(formData.get("title") ?? "").trim();
  let slug = String(formData.get("slug") ?? "").trim();
  if (!slug) slug = slugify(title);

  return {
    title,
    slug,
    category: String(formData.get("category") ?? "News").trim() || "News",
    date: String(formData.get("date") ?? "").trim(),
    image,
    excerpt: String(formData.get("excerpt") ?? "").trim(),
    content: String(formData.get("content") ?? "").trim() || null,
    published: formData.get("published") === "on",
    sortOrder: Number(formData.get("sortOrder") ?? 0) || 0,
  };
}

export async function createBlog(formData: FormData) {
  await requireUser();
  await prisma.blogPost.create({ data: await parseForm(formData) });
  revalidate();
  redirect("/admin/blogs");
}

export async function updateBlog(id: string, formData: FormData) {
  await requireUser();
  await prisma.blogPost.update({ where: { id }, data: await parseForm(formData) });
  revalidate();
  redirect("/admin/blogs");
}

export async function deleteBlog(formData: FormData) {
  await requireUser();
  await prisma.blogPost.delete({ where: { id: String(formData.get("id")) } });
  revalidate();
}
