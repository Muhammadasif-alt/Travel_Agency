"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";

function revalidate() {
  revalidatePath("/visa");
  revalidatePath("/admin/visa");
}

function parseForm(formData: FormData) {
  return {
    country: String(formData.get("country") ?? "").trim(),
    flag: String(formData.get("flag") ?? "").trim(),
    visaType: String(formData.get("visaType") ?? "").trim(),
    processingTime: String(formData.get("processingTime") ?? "").trim(),
    startingPrice: String(formData.get("startingPrice") ?? "").trim(),
    sortOrder: Number(formData.get("sortOrder") ?? 0) || 0,
    isActive: formData.get("isActive") === "on",
  };
}

export async function createVisa(formData: FormData) {
  await requireUser();
  await prisma.visaCountry.create({ data: parseForm(formData) });
  revalidate();
  redirect("/admin/visa");
}

export async function updateVisa(id: string, formData: FormData) {
  await requireUser();
  await prisma.visaCountry.update({ where: { id }, data: parseForm(formData) });
  revalidate();
  redirect("/admin/visa");
}

export async function deleteVisa(formData: FormData) {
  await requireUser();
  await prisma.visaCountry.delete({ where: { id: String(formData.get("id")) } });
  revalidate();
}
