import Link from "next/link";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deleteVisa } from "./actions";

export const dynamic = "force-dynamic";

export default async function VisaAdmin() {
  const items = await prisma.visaCountry.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div>
      <PageHeader
        title="Visa Countries"
        subtitle="Visa services list."
        action={
          <Link
            href="/admin/visa/new"
            className="h-11 px-5 inline-flex items-center gap-2 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            <Plus size={18} /> New Country
          </Link>
        }
      />

      <Table head={["", "Country", "Type", "Time", "Price", "Active", "Actions"]}>
        {items.map((v) => (
          <tr key={v.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 text-xl">{v.flag}</td>
            <td className="px-4 py-3 font-medium text-gray-800">{v.country}</td>
            <td className="px-4 py-3 text-muted-foreground">{v.visaType}</td>
            <td className="px-4 py-3 whitespace-nowrap">{v.processingTime}</td>
            <td className="px-4 py-3 whitespace-nowrap">{v.startingPrice}</td>
            <td className="px-4 py-3">{v.isActive ? "✓" : "—"}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link href={`/admin/visa/${v.id}`} className="text-sm font-semibold text-brand-light hover:text-brand">
                  Edit
                </Link>
                <DeleteButton action={deleteVisa} id={v.id} />
              </div>
            </td>
          </tr>
        ))}
        {items.length === 0 && (
          <tr>
            <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
              No countries yet.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
