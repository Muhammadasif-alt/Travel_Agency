import Link from "next/link";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-guard";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deleteUser } from "./actions";

export const dynamic = "force-dynamic";

export default async function UsersAdmin() {
  const me = await requireAdmin();
  const users = await prisma.user.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div>
      <PageHeader
        title="Users"
        subtitle="Admin panel logins (owner + staff)."
        action={
          <Link
            href="/admin/users/new"
            className="h-11 px-5 inline-flex items-center gap-2 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            <Plus size={18} /> New User
          </Link>
        }
      />

      <Table head={["Name", "Email", "Role", "Actions"]}>
        {users.map((u) => (
          <tr key={u.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">
              {u.name} {u.id === me.sub && <span className="text-xs text-brand-light">(you)</span>}
            </td>
            <td className="px-4 py-3 text-muted-foreground">{u.email}</td>
            <td className="px-4 py-3">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-100 text-brand">
                {u.role}
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link href={`/admin/users/${u.id}`} className="text-sm font-semibold text-brand-light hover:text-brand">
                  Edit
                </Link>
                {u.id !== me.sub && <DeleteButton action={deleteUser} id={u.id} />}
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
