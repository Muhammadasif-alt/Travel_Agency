import Link from "next/link";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deleteTestimonial } from "./actions";

export const dynamic = "force-dynamic";

export default async function TestimonialsAdmin() {
  const items = await prisma.testimonial.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div>
      <PageHeader
        title="Success Stories"
        subtitle="Pilgrims' reviews and stories."
        action={
          <Link
            href="/admin/testimonials/new"
            className="h-11 px-5 inline-flex items-center gap-2 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            <Plus size={18} /> New Story
          </Link>
        }
      />

      <Table head={["Name", "Meta", "Rating", "Active", "Actions"]}>
        {items.map((t) => (
          <tr key={t.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">{t.name}</td>
            <td className="px-4 py-3 text-muted-foreground">{t.meta}</td>
            <td className="px-4 py-3 text-gold">{"★".repeat(t.rating)}</td>
            <td className="px-4 py-3">{t.isActive ? "✓" : "—"}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link href={`/admin/testimonials/${t.id}`} className="text-sm font-semibold text-brand-light hover:text-brand">
                  Edit
                </Link>
                <DeleteButton action={deleteTestimonial} id={t.id} />
              </div>
            </td>
          </tr>
        ))}
        {items.length === 0 && (
          <tr>
            <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
              No stories yet.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
