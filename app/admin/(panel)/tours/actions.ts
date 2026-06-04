"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";

function revalidate() {
  revalidatePath("/tours");
  revalidatePath("/admin/tours");
}

function parseForm(formData: FormData) {
  return {
    destination: String(formData.get("destination") ?? "").trim(),
    flag: String(formData.get("flag") ?? "").trim(),
    nights: String(formData.get("nights") ?? "").trim(),
    startingPrice: String(formData.get("startingPrice") ?? "").trim(),
    highlights: String(formData.get("highlights") ?? "").trim(),
    sortOrder: Number(formData.get("sortOrder") ?? 0) || 0,
    isActive: formData.get("isActive") === "on",
  };
}

export async function createTour(formData: FormData) {
  await requireUser();
  await prisma.tourPackage.create({ data: parseForm(formData) });
  revalidate();
  redirect("/admin/tours");
}

export async function updateTour(id: string, formData: FormData) {
  await requireUser();
  await prisma.tourPackage.update({ where: { id }, data: parseForm(formData) });
  revalidate();
  redirect("/admin/tours");
}

export async function deleteTour(formData: FormData) {
  await requireUser();
  await prisma.tourPackage.delete({ where: { id: String(formData.get("id")) } });
  revalidate();
}
