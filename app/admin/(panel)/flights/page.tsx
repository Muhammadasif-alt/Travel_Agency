import Link from "next/link";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deleteFlight } from "./actions";

export const dynamic = "force-dynamic";

export default async function FlightsAdmin() {
  const items = await prisma.flightDeal.findMany({
    orderBy: [{ scope: "asc" }, { sortOrder: "asc" }],
  });

  return (
    <div>
      <PageHeader
        title="Flights"
        subtitle="International & domestic flight deals."
        action={
          <Link
            href="/admin/flights/new"
            className="h-11 px-5 inline-flex items-center gap-2 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            <Plus size={18} /> New Flight
          </Link>
        }
      />

      <Table head={["Scope", "Route", "Airline", "Type", "Price", "Active", "Actions"]}>
        {items.map((f) => (
          <tr key={f.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 text-xs">{f.scope === "INTERNATIONAL" ? "Intl" : "Domestic"}</td>
            <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">
              {f.fromCity} → {f.city} ({f.toCode})
            </td>
            <td className="px-4 py-3">{f.airline}</td>
            <td className="px-4 py-3">{f.tripType}</td>
            <td className="px-4 py-3 whitespace-nowrap">{f.price}</td>
            <td className="px-4 py-3">{f.isActive ? "✓" : "—"}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link href={`/admin/flights/${f.id}`} className="text-sm font-semibold text-brand-light hover:text-brand">
                  Edit
                </Link>
                <DeleteButton action={deleteFlight} id={f.id} />
              </div>
            </td>
          </tr>
        ))}
        {items.length === 0 && (
          <tr>
            <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
              Koi flight nahi.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
