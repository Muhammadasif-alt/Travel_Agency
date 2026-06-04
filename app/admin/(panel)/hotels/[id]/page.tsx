import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/ui";
import { HotelForm } from "@/components/admin/hotel-form";
import { updateHotel } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditHotelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const h = await prisma.hotelOption.findUnique({ where: { id } });
  if (!h) notFound();

  const update = updateHotel.bind(null, id);

  return (
    <div>
      <PageHeader title="Edit Hotel" subtitle={h.name} />
      <HotelForm
        action={update}
        defaults={{
          name: h.name,
          city: h.city,
          stars: h.stars,
          distance: h.distance,
          startingPrice: h.startingPrice,
          perks: Array.isArray(h.perks) ? (h.perks as string[]) : [],
          sortOrder: h.sortOrder,
          isActive: h.isActive,
        }}
      />
    </div>
  );
}
