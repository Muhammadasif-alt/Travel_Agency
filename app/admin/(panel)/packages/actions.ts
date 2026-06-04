"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PackageType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";
import { saveUpload } from "@/lib/upload";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/umrah");
  revalidatePath("/hajj");
  revalidatePath("/admin/packages");
}

async function parseForm(formData: FormData) {
  const file = formData.get("image") as File | null;
  const uploaded = await saveUpload(file);
  const currentImage = String(formData.get("image__current") ?? "");
  const image = uploaded ?? currentImage;

  const features = String(formData.get("features") ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  return {
    type: String(formData.get("type")) as PackageType,
    title: String(formData.get("title") ?? "").trim(),
    image,
    imageAlt: String(formData.get("imageAlt") ?? "").trim(),
    tag: String(formData.get("tag") ?? "").trim(),
    tagVariant: String(formData.get("tagVariant") ?? "default"),
    discount: String(formData.get("discount") ?? "").trim() || null,
    meta: String(formData.get("meta") ?? "").trim(),
    features,
    oldPrice: String(formData.get("oldPrice") ?? "").trim() || null,
    newPrice: String(formData.get("newPrice") ?? "").trim(),
    priceLabel: String(formData.get("priceLabel") ?? "").trim() || null,
    featured: formData.get("featured") === "on",
    showOnHome: formData.get("showOnHome") === "on",
    sortOrder: Number(formData.get("sortOrder") ?? 0) || 0,
    isActive: formData.get("isActive") === "on",
  };
}

export async function createPackage(formData: FormData) {
  await requireUser();
  const data = await parseForm(formData);
  await prisma.package.create({ data });
  revalidate();
  redirect("/admin/packages");
}

export async function updatePackage(id: string, formData: FormData) {
  await requireUser();
  const data = await parseForm(formData);
  await prisma.package.update({ where: { id }, data });
  revalidate();
  redirect("/admin/packages");
}

export async function deletePackage(formData: FormData) {
  await requireUser();
  const id = String(formData.get("id"));
  await prisma.package.delete({ where: { id } });
  revalidate();
}
