"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-guard";

export type SettingsState = { ok?: boolean; error?: string };

export async function updateSettings(
  _prev: SettingsState,
  formData: FormData
): Promise<SettingsState> {
  await requireAdmin();

  const data = {
    phone: String(formData.get("phone") ?? "").trim(),
    whatsapp: String(formData.get("whatsapp") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    address: String(formData.get("address") ?? "").trim(),
    facebookUrl: String(formData.get("facebookUrl") ?? "").trim(),
    instagramUrl: String(formData.get("instagramUrl") ?? "").trim(),
    tiktokUrl: String(formData.get("tiktokUrl") ?? "").trim(),
    hajjStatus: String(formData.get("hajjStatus") ?? "closed-next-open"),
    hajjYear: Number(formData.get("hajjYear") ?? 2026) || 2026,
    hajjNextYear: Number(formData.get("hajjNextYear") ?? 2027) || 2027,
  };

  await prisma.siteSetting.upsert({
    where: { id: "default" },
    update: data,
    create: { id: "default", ...data },
  });

  // Contact info + Hajj status appear across the whole site.
  for (const p of ["/", "/hajj", "/umrah", "/contact", "/flights", "/visa", "/hotels", "/tours", "/about", "/blog"]) {
    revalidatePath(p);
  }
  revalidatePath("/admin/settings");

  return { ok: true };
}
