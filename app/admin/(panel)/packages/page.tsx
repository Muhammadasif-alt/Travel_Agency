import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deletePackage } from "./actions";

export const dynamic = "force-dynamic";

export default async function PackagesAdmin() {
  const packages = await prisma.package.findMany({
    orderBy: [{ type: "asc" }, { sortOrder: "asc" }],
  });

  return (
    <div>
      <PageHeader
        title="Packages"
        subtitle="Umrah aur Hajj packages — add, edit, delete."
        action={
          <Link
            href="/admin/packages/new"
            className="h-11 px-5 inline-flex items-center gap-2 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            <Plus size={18} /> New Package
          </Link>
        }
      />

      <Table head={["", "Title", "Type", "Price", "Home", "Active", "Actions"]}>
        {packages.map((p) => (
          <tr key={p.id} className="hover:bg-gray-50">
            <td className="px-4 py-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                {p.image && (
                  <Image src={p.image} alt={p.title} fill sizes="48px" className="object-cover" />
                )}
              </div>
            </td>
            <td className="px-4 py-3 font-medium text-gray-800">{p.title}</td>
            <td className="px-4 py-3">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-100 text-brand">
                {p.type}
              </span>
            </td>
            <td className="px-4 py-3 whitespace-nowrap">{p.newPrice}</td>
            <td className="px-4 py-3">{p.showOnHome ? "✓" : "—"}</td>
            <td className="px-4 py-3">{p.isActive ? "✓" : "—"}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link
                  href={`/admin/packages/${p.id}`}
                  className="text-sm font-semibold text-brand-light hover:text-brand"
                >
                  Edit
                </Link>
                <DeleteButton action={deletePackage} id={p.id} />
              </div>
            </td>
          </tr>
        ))}
        {packages.length === 0 && (
          <tr>
            <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
              Koi package nahi. &ldquo;New Package&rdquo; se add karein.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
