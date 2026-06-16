"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";

function revalidate() {
  revalidatePath("/admin/inquiries");
  revalidatePath("/admin");
}

export async function markRead(id: string, isRead: boolean) {
  await requireUser();
  await prisma.inquiry.update({ where: { id }, data: { isRead } });
  revalidate();
}

export async function deleteInquiry(formData: FormData) {
  await requireUser();
  await prisma.inquiry.delete({ where: { id: String(formData.get("id")) } });
  revalidate();
}
