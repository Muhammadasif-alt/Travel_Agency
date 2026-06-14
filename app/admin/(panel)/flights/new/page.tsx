import { PageHeader } from "@/components/admin/ui";
import { FlightForm } from "@/components/admin/flight-form";
import { createFlight } from "../actions";

export const dynamic = "force-dynamic";

export default function NewFlightPage() {
  return (
    <div>
      <PageHeader title="New Flight" subtitle="Add a new flight deal." />
      <FlightForm action={createFlight} />
    </div>
  );
}
