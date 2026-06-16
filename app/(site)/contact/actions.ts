"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(40),
  email: z.string().trim().email().max(160),
  service: z.string().trim().max(40).default(""),
  message: z.string().trim().min(5).max(4000),
});

export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitInquiry(input: unknown): Promise<SubmitResult> {
  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Please check your details and try again." };
  }
  try {
    await prisma.inquiry.create({ data: parsed.data });
    // Refresh the admin inbox + dashboard counts.
    revalidatePath("/admin/inquiries");
    revalidatePath("/admin");
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Something went wrong. Please call or WhatsApp us and we'll help right away.",
    };
  }
}
