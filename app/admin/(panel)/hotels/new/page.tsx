import { PageHeader } from "@/components/admin/ui";
import { HotelForm } from "@/components/admin/hotel-form";
import { createHotel } from "../actions";

export const dynamic = "force-dynamic";

export default function NewHotelPage() {
  return (
    <div>
      <PageHeader title="New Hotel" subtitle="Hotel option add karein." />
      <HotelForm action={createHotel} />
    </div>
  );
}
