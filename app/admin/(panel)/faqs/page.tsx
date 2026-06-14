import Link from "next/link";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deleteFaq } from "./actions";

export const dynamic = "force-dynamic";

export default async function FaqsAdmin() {
  const items = await prisma.faq.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div>
      <PageHeader
        title="FAQs"
        subtitle="Frequently asked questions."
        action={
          <Link
            href="/admin/faqs/new"
            className="h-11 px-5 inline-flex items-center gap-2 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            <Plus size={18} /> New FAQ
          </Link>
        }
      />

      <Table head={["Question", "Active", "Actions"]}>
        {items.map((f) => (
          <tr key={f.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800 max-w-xl">{f.question}</td>
            <td className="px-4 py-3">{f.isActive ? "✓" : "—"}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link href={`/admin/faqs/${f.id}`} className="text-sm font-semibold text-brand-light hover:text-brand">
                  Edit
                </Link>
                <DeleteButton action={deleteFaq} id={f.id} />
              </div>
            </td>
          </tr>
        ))}
        {items.length === 0 && (
          <tr>
            <td colSpan={3} className="px-4 py-8 text-center text-muted-foreground">
              No FAQs yet.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
