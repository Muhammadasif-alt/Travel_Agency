"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FlightScope } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";
import { saveUpload } from "@/lib/upload";

function revalidate() {
  revalidatePath("/flights");
  revalidatePath("/admin/flights");
}

async function parseForm(formData: FormData) {
  const uploaded = await saveUpload(formData.get("image") as File | null);
  const image = uploaded ?? String(formData.get("image__current") ?? "");
  return {
    scope: String(formData.get("scope")) as FlightScope,
    fromCity: String(formData.get("fromCity") ?? "").trim(),
    toCode: String(formData.get("toCode") ?? "").trim(),
    city: String(formData.get("city") ?? "").trim(),
    country: String(formData.get("country") ?? "").trim(),
    airline: String(formData.get("airline") ?? "").trim(),
    tripType: String(formData.get("tripType") ?? "Return"),
    price: String(formData.get("price") ?? "").trim(),
    image,
    sortOrder: Number(formData.get("sortOrder") ?? 0) || 0,
    isActive: formData.get("isActive") === "on",
  };
}

export async function createFlight(formData: FormData) {
  await requireUser();
  await prisma.flightDeal.create({ data: await parseForm(formData) });
  revalidate();
  redirect("/admin/flights");
}

export async function updateFlight(id: string, formData: FormData) {
  await requireUser();
  await prisma.flightDeal.update({ where: { id }, data: await parseForm(formData) });
  revalidate();
  redirect("/admin/flights");
}

export async function deleteFlight(formData: FormData) {
  await requireUser();
  await prisma.flightDeal.delete({ where: { id: String(formData.get("id")) } });
  revalidate();
}
