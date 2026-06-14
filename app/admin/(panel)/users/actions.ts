"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Role } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-guard";
import { hashPassword } from "@/lib/auth";

export type UserState = { error?: string };

export async function createUser(
  _prev: UserState,
  formData: FormData
): Promise<UserState> {
  await requireAdmin();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const name = String(formData.get("name") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const role = String(formData.get("role") ?? "EDITOR") as Role;

  if (!email || !name || !password) {
    return { error: "Email, name and password are required." };
  }
  if (password.length < 6) {
    return { error: "Password must be at least 6 characters." };
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return { error: "This email is already registered." };

  await prisma.user.create({
    data: { email, name, role, passwordHash: await hashPassword(password) },
  });
  revalidatePath("/admin/users");
  redirect("/admin/users");
}

export async function updateUser(
  id: string,
  _prev: UserState,
  formData: FormData
): Promise<UserState> {
  await requireAdmin();
  const name = String(formData.get("name") ?? "").trim();
  const role = String(formData.get("role") ?? "EDITOR") as Role;
  const password = String(formData.get("password") ?? "");

  if (!name) return { error: "Name is required." };
  if (password && password.length < 6) {
    return { error: "Password must be at least 6 characters." };
  }

  await prisma.user.update({
    where: { id },
    data: {
      name,
      role,
      ...(password ? { passwordHash: await hashPassword(password) } : {}),
    },
  });
  revalidatePath("/admin/users");
  redirect("/admin/users");
}

export async function deleteUser(formData: FormData) {
  const me = await requireAdmin();
  const id = String(formData.get("id"));
  if (id === me.sub) return; // can't delete yourself
  const adminCount = await prisma.user.count({ where: { role: "ADMIN" } });
  const target = await prisma.user.findUnique({ where: { id } });
  if (target?.role === "ADMIN" && adminCount <= 1) return; // keep at least one admin
  await prisma.user.delete({ where: { id } });
  revalidatePath("/admin/users");
}
