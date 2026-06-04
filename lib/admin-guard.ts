import "server-only";
import { redirect } from "next/navigation";
import { getSession, type SessionUser } from "./auth";

/** Returns the signed-in user, or redirects to the login page. */
export async function requireUser(): Promise<SessionUser> {
  const user = await getSession();
  if (!user) redirect("/admin/login");
  return user;
}

/** Like requireUser, but also requires the ADMIN role. */
export async function requireAdmin(): Promise<SessionUser> {
  const user = await requireUser();
  if (user.role !== "ADMIN") redirect("/admin");
  return user;
}
