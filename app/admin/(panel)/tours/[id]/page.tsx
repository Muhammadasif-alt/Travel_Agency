import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/ui";
import { TourForm } from "@/components/admin/tour-form";
import { updateTour } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditTourPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await prisma.tourPackage.findUnique({ where: { id } });
  if (!t) notFound();

  const update = updateTour.bind(null, id);

  return (
    <div>
      <PageHeader title="Edit Tour" subtitle={t.destination} />
      <TourForm
        action={update}
        defaults={{
          destination: t.destination,
          flag: t.flag,
          nights: t.nights,
          startingPrice: t.startingPrice,
          highlights: t.highlights,
          sortOrder: t.sortOrder,
          isActive: t.isActive,
        }}
      />
    </div>
  );
}
