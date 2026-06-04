"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";
import { saveUpload } from "@/lib/upload";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60);

function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/services");
}

async function parseForm(formData: FormData) {
  const uploaded = await saveUpload(formData.get("image") as File | null);
  const image = uploaded ?? String(formData.get("image__current") ?? "");
  const title = String(formData.get("title") ?? "").trim();
  let slug = String(formData.get("slug") ?? "").trim();
  if (!slug) slug = slugify(title);
  const points = String(formData.get("points") ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  return {
    slug,
    href: String(formData.get("href") ?? "").trim() || "/contact",
    icon: String(formData.get("icon") ?? "").trim(),
    image,
    title,
    desc: String(formData.get("desc") ?? "").trim(),
    long: String(formData.get("long") ?? "").trim(),
    points,
    startingPrice: String(formData.get("startingPrice") ?? "").trim() || null,
    isNew: formData.get("isNew") === "on",
    sortOrder: Number(formData.get("sortOrder") ?? 0) || 0,
    isActive: formData.get("isActive") === "on",
  };
}

export async function createService(formData: FormData) {
  await requireUser();
  await prisma.service.create({ data: await parseForm(formData) });
  revalidate();
  redirect("/admin/services");
}

export async function updateService(id: string, formData: FormData) {
  await requireUser();
  await prisma.service.update({ where: { id }, data: await parseForm(formData) });
  revalidate();
  redirect("/admin/services");
}

export async function deleteService(formData: FormData) {
  await requireUser();
  await prisma.service.delete({ where: { id: String(formData.get("id")) } });
  revalidate();
}
