import "server-only";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

/**
 * Saves an uploaded image File to /public/uploads and returns its public URL
 * (e.g. "/uploads/1717-abc.jpg"). Returns null if no real file was provided.
 */
export async function saveUpload(file: File | null): Promise<string | null> {
  if (!file || typeof file === "string" || file.size === 0) return null;

  const okTypes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];
  if (!okTypes.includes(file.type)) {
    throw new Error("Sirf image files allowed hain (jpg, png, webp, gif, avif).");
  }
  if (file.size > 6 * 1024 * 1024) {
    throw new Error("Image 6MB se choti honi chahiye.");
  }

  await mkdir(UPLOAD_DIR, { recursive: true });

  const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
  const base = file.name
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 40);
  const unique = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  const filename = `${base || "img"}-${unique}.${ext}`;

  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(UPLOAD_DIR, filename), bytes);

  return `/uploads/${filename}`;
}
