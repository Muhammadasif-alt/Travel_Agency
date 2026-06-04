import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/ui";
import { FaqForm } from "@/components/admin/faq-form";
import { updateFaq } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditFaqPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const f = await prisma.faq.findUnique({ where: { id } });
  if (!f) notFound();

  const update = updateFaq.bind(null, id);

  return (
    <div>
      <PageHeader title="Edit FAQ" subtitle={f.question} />
      <FaqForm
        action={update}
        defaults={{
          question: f.question,
          answer: f.answer,
          sortOrder: f.sortOrder,
          isActive: f.isActive,
        }}
      />
    </div>
  );
}
