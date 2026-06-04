import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/ui";
import { FlightForm } from "@/components/admin/flight-form";
import { updateFlight } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditFlightPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const f = await prisma.flightDeal.findUnique({ where: { id } });
  if (!f) notFound();

  const update = updateFlight.bind(null, id);

  return (
    <div>
      <PageHeader title="Edit Flight" subtitle={`${f.fromCity} → ${f.city}`} />
      <FlightForm
        action={update}
        defaults={{
          scope: f.scope,
          fromCity: f.fromCity,
          toCode: f.toCode,
          city: f.city,
          country: f.country,
          airline: f.airline,
          tripType: f.tripType,
          price: f.price,
          image: f.image,
          sortOrder: f.sortOrder,
          isActive: f.isActive,
        }}
      />
    </div>
  );
}
