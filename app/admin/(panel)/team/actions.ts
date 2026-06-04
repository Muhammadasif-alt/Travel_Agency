"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";
import { saveUpload } from "@/lib/upload";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/admin/team");
}

async function parseForm(formData: FormData) {
  const uploaded = await saveUpload(formData.get("photo") as File | null);
  const photo = (uploaded ?? String(formData.get("photo__current") ?? "")) || null;
  return {
    name: String(formData.get("name") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    photo,
    sortOrder: Number(formData.get("sortOrder") ?? 0) || 0,
    isActive: formData.get("isActive") === "on",
  };
}

export async function createTeam(formData: FormData) {
  await requireUser();
  await prisma.teamMember.create({ data: await parseForm(formData) });
  revalidate();
  redirect("/admin/team");
}

export async function updateTeam(id: string, formData: FormData) {
  await requireUser();
  await prisma.teamMember.update({ where: { id }, data: await parseForm(formData) });
  revalidate();
  redirect("/admin/team");
}

export async function deleteTeam(formData: FormData) {
  await requireUser();
  await prisma.teamMember.delete({ where: { id: String(formData.get("id")) } });
  revalidate();
}
