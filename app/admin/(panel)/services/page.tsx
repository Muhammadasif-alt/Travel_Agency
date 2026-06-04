import Link from "next/link";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deleteService } from "./actions";

export const dynamic = "force-dynamic";

export default async function ServicesAdmin() {
  const items = await prisma.service.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div>
      <PageHeader
        title="Services"
        subtitle="Home page ke services cards."
        action={
          <Link
            href="/admin/services/new"
            className="h-11 px-5 inline-flex items-center gap-2 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            <Plus size={18} /> New Service
          </Link>
        }
      />

      <Table head={["Icon", "Title", "Price", "Link", "Active", "Actions"]}>
        {items.map((s) => (
          <tr key={s.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 text-2xl">{s.icon}</td>
            <td className="px-4 py-3 font-medium text-gray-800">{s.title}</td>
            <td className="px-4 py-3 whitespace-nowrap">{s.startingPrice ?? "—"}</td>
            <td className="px-4 py-3 text-muted-foreground">{s.href}</td>
            <td className="px-4 py-3">{s.isActive ? "✓" : "—"}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link href={`/admin/services/${s.id}`} className="text-sm font-semibold text-brand-light hover:text-brand">
                  Edit
                </Link>
                <DeleteButton action={deleteService} id={s.id} />
              </div>
            </td>
          </tr>
        ))}
        {items.length === 0 && (
          <tr>
            <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
              Koi service nahi.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
