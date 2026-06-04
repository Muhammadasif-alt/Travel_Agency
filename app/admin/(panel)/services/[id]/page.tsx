import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/ui";
import { ServiceForm } from "@/components/admin/service-form";
import { updateService } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const s = await prisma.service.findUnique({ where: { id } });
  if (!s) notFound();

  const update = updateService.bind(null, id);

  return (
    <div>
      <PageHeader title="Edit Service" subtitle={s.title} />
      <ServiceForm
        action={update}
        defaults={{
          slug: s.slug,
          href: s.href,
          icon: s.icon,
          image: s.image,
          title: s.title,
          desc: s.desc,
          long: s.long,
          points: Array.isArray(s.points) ? (s.points as string[]) : [],
          startingPrice: s.startingPrice ?? "",
          isNew: s.isNew,
          sortOrder: s.sortOrder,
          isActive: s.isActive,
        }}
      />
    </div>
  );
}
