"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";

function revalidate() {
  revalidatePath("/hotels");
  revalidatePath("/admin/hotels");
}

function parseForm(formData: FormData) {
  const perks = String(formData.get("perks") ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  return {
    name: String(formData.get("name") ?? "").trim(),
    city: String(formData.get("city") ?? "").trim(),
    stars: Math.min(5, Math.max(1, Number(formData.get("stars") ?? 5) || 5)),
    distance: String(formData.get("distance") ?? "").trim(),
    startingPrice: String(formData.get("startingPrice") ?? "").trim(),
    perks,
    sortOrder: Number(formData.get("sortOrder") ?? 0) || 0,
    isActive: formData.get("isActive") === "on",
  };
}

export async function createHotel(formData: FormData) {
  await requireUser();
  await prisma.hotelOption.create({ data: parseForm(formData) });
  revalidate();
  redirect("/admin/hotels");
}

export async function updateHotel(id: string, formData: FormData) {
  await requireUser();
  await prisma.hotelOption.update({ where: { id }, data: parseForm(formData) });
  revalidate();
  redirect("/admin/hotels");
}

export async function deleteHotel(formData: FormData) {
  await requireUser();
  await prisma.hotelOption.delete({ where: { id: String(formData.get("id")) } });
  revalidate();
}
