import { PageHeader } from "@/components/admin/ui";
import { ServiceForm } from "@/components/admin/service-form";
import { createService } from "../actions";

export const dynamic = "force-dynamic";

export default function NewServicePage() {
  return (
    <div>
      <PageHeader title="New Service" subtitle="Add a new service card." />
      <ServiceForm action={createService} />
    </div>
  );
}
