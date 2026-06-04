import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/ui";
import { TestimonialForm } from "@/components/admin/testimonial-form";
import { updateTestimonial } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await prisma.testimonial.findUnique({ where: { id } });
  if (!t) notFound();

  const update = updateTestimonial.bind(null, id);

  return (
    <div>
      <PageHeader title="Edit Story" subtitle={t.name} />
      <TestimonialForm
        action={update}
        defaults={{
          name: t.name,
          meta: t.meta,
          text: t.text,
          rating: t.rating,
          photo: t.photo,
          sortOrder: t.sortOrder,
          isActive: t.isActive,
        }}
      />
    </div>
  );
}
