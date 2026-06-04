import { PageHeader } from "@/components/admin/ui";
import { TourForm } from "@/components/admin/tour-form";
import { createTour } from "../actions";

export const dynamic = "force-dynamic";

export default function NewTourPage() {
  return (
    <div>
      <PageHeader title="New Tour" subtitle="Tour package add karein." />
      <TourForm action={createTour} />
    </div>
  );
}
