import Link from "next/link";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deleteHotel } from "./actions";

export const dynamic = "force-dynamic";

export default async function HotelsAdmin() {
  const items = await prisma.hotelOption.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div>
      <PageHeader
        title="Hotels"
        subtitle="Hotel options."
        action={
          <Link
            href="/admin/hotels/new"
            className="h-11 px-5 inline-flex items-center gap-2 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            <Plus size={18} /> New Hotel
          </Link>
        }
      />

      <Table head={["Name", "City", "Stars", "Price", "Active", "Actions"]}>
        {items.map((h) => (
          <tr key={h.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">{h.name}</td>
            <td className="px-4 py-3">{h.city}</td>
            <td className="px-4 py-3 text-gold">{"★".repeat(h.stars)}</td>
            <td className="px-4 py-3 whitespace-nowrap">{h.startingPrice}</td>
            <td className="px-4 py-3">{h.isActive ? "✓" : "—"}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link href={`/admin/hotels/${h.id}`} className="text-sm font-semibold text-brand-light hover:text-brand">
                  Edit
                </Link>
                <DeleteButton action={deleteHotel} id={h.id} />
              </div>
            </td>
          </tr>
        ))}
        {items.length === 0 && (
          <tr>
            <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
              No hotels yet.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
