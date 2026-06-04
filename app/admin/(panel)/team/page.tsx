import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { avatar } from "@/lib/images";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deleteTeam } from "./actions";

export const dynamic = "force-dynamic";

export default async function TeamAdmin() {
  const members = await prisma.teamMember.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div>
      <PageHeader
        title="Team"
        subtitle="Team members jo About / Home par dikhte hain."
        action={
          <Link
            href="/admin/team/new"
            className="h-11 px-5 inline-flex items-center gap-2 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            <Plus size={18} /> New Member
          </Link>
        }
      />

      <Table head={["", "Name", "Role", "Active", "Actions"]}>
        {members.map((m) => (
          <tr key={m.id} className="hover:bg-gray-50">
            <td className="px-4 py-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-100">
                <Image src={m.photo || avatar(m.name)} alt={m.name} fill sizes="44px" className="object-cover" />
              </div>
            </td>
            <td className="px-4 py-3 font-medium text-gray-800">{m.name}</td>
            <td className="px-4 py-3 text-muted-foreground">{m.role}</td>
            <td className="px-4 py-3">{m.isActive ? "✓" : "—"}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link href={`/admin/team/${m.id}`} className="text-sm font-semibold text-brand-light hover:text-brand">
                  Edit
                </Link>
                <DeleteButton action={deleteTeam} id={m.id} />
              </div>
            </td>
          </tr>
        ))}
        {members.length === 0 && (
          <tr>
            <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
              Koi member nahi.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
