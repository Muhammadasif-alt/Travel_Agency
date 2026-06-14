import Link from "next/link";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deleteTour } from "./actions";

export const dynamic = "force-dynamic";

export default async function ToursAdmin() {
  const items = await prisma.tourPackage.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div>
      <PageHeader
        title="Tours"
        subtitle="Leisure & group tour packages."
        action={
          <Link
            href="/admin/tours/new"
            className="h-11 px-5 inline-flex items-center gap-2 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            <Plus size={18} /> New Tour
          </Link>
        }
      />

      <Table head={["", "Destination", "Nights", "Price", "Active", "Actions"]}>
        {items.map((t) => (
          <tr key={t.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 text-xl">{t.flag}</td>
            <td className="px-4 py-3 font-medium text-gray-800">{t.destination}</td>
            <td className="px-4 py-3">{t.nights}</td>
            <td className="px-4 py-3 whitespace-nowrap">{t.startingPrice}</td>
            <td className="px-4 py-3">{t.isActive ? "✓" : "—"}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link href={`/admin/tours/${t.id}`} className="text-sm font-semibold text-brand-light hover:text-brand">
                  Edit
                </Link>
                <DeleteButton action={deleteTour} id={t.id} />
              </div>
            </td>
          </tr>
        ))}
        {items.length === 0 && (
          <tr>
            <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
              No tours yet.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
