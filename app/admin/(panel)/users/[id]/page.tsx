import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-guard";
import { PageHeader } from "@/components/admin/ui";
import { UserForm } from "@/components/admin/user-form";
import { updateUser } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const u = await prisma.user.findUnique({ where: { id } });
  if (!u) notFound();

  const update = updateUser.bind(null, id);

  return (
    <div>
      <PageHeader title="Edit User" subtitle={u.email} />
      <UserForm
        action={update}
        isEdit
        defaults={{ email: u.email, name: u.name, role: u.role }}
      />
    </div>
  );
}
