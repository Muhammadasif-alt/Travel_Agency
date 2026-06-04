import { PageHeader } from "@/components/admin/ui";
import { UserForm } from "@/components/admin/user-form";
import { requireAdmin } from "@/lib/admin-guard";
import { createUser } from "../actions";

export const dynamic = "force-dynamic";

export default async function NewUserPage() {
  await requireAdmin();
  return (
    <div>
      <PageHeader title="New User" subtitle="Naya admin/editor login banayein." />
      <UserForm action={createUser} />
    </div>
  );
}
