import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/ui";
import { VisaForm } from "@/components/admin/visa-form";
import { updateVisa } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditVisaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const v = await prisma.visaCountry.findUnique({ where: { id } });
  if (!v) notFound();

  const update = updateVisa.bind(null, id);

  return (
    <div>
      <PageHeader title="Edit Country" subtitle={v.country} />
      <VisaForm
        action={update}
        defaults={{
          country: v.country,
          flag: v.flag,
          visaType: v.visaType,
          processingTime: v.processingTime,
          startingPrice: v.startingPrice,
          sortOrder: v.sortOrder,
          isActive: v.isActive,
        }}
      />
    </div>
  );
}
