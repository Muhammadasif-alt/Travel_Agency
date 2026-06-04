"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/hajj");
  revalidatePath("/umrah");
  revalidatePath("/contact");
  revalidatePath("/admin/faqs");
}

function parseForm(formData: FormData) {
  return {
    question: String(formData.get("question") ?? "").trim(),
    answer: String(formData.get("answer") ?? "").trim(),
    sortOrder: Number(formData.get("sortOrder") ?? 0) || 0,
    isActive: formData.get("isActive") === "on",
  };
}

export async function createFaq(formData: FormData) {
  await requireUser();
  await prisma.faq.create({ data: parseForm(formData) });
  revalidate();
  redirect("/admin/faqs");
}

export async function updateFaq(id: string, formData: FormData) {
  await requireUser();
  await prisma.faq.update({ where: { id }, data: parseForm(formData) });
  revalidate();
  redirect("/admin/faqs");
}

export async function deleteFaq(formData: FormData) {
  await requireUser();
  await prisma.faq.delete({ where: { id: String(formData.get("id")) } });
  revalidate();
}
