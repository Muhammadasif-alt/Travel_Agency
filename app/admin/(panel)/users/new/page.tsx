import { PageHeader } from "@/components/admin/ui";
import { UserForm } from "@/components/admin/user-form";
import { requireAdmin } from "@/lib/admin-guard";
import { createUser } from "../actions";

export const dynamic = "force-dynamic";

export default async function NewUserPage() {
  await requireAdmin();
  return (
    <div>
      <PageHeader title="New User" subtitle="Create a new admin/editor login." />
      <UserForm action={createUser} />
    </div>
  );
}
