"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";
import { saveUpload } from "@/lib/upload";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
}

async function parseForm(formData: FormData) {
  const uploaded = await saveUpload(formData.get("photo") as File | null);
  const photo = (uploaded ?? String(formData.get("photo__current") ?? "")) || null;
  return {
    name: String(formData.get("name") ?? "").trim(),
    meta: String(formData.get("meta") ?? "").trim(),
    text: String(formData.get("text") ?? "").trim(),
    rating: Math.min(5, Math.max(1, Number(formData.get("rating") ?? 5) || 5)),
    photo,
    sortOrder: Number(formData.get("sortOrder") ?? 0) || 0,
    isActive: formData.get("isActive") === "on",
  };
}

export async function createTestimonial(formData: FormData) {
  await requireUser();
  await prisma.testimonial.create({ data: await parseForm(formData) });
  revalidate();
  redirect("/admin/testimonials");
}

export async function updateTestimonial(id: string, formData: FormData) {
  await requireUser();
  await prisma.testimonial.update({ where: { id }, data: await parseForm(formData) });
  revalidate();
  redirect("/admin/testimonials");
}

export async function deleteTestimonial(formData: FormData) {
  await requireUser();
  await prisma.testimonial.delete({ where: { id: String(formData.get("id")) } });
  revalidate();
}
