import { PageHeader } from "@/components/admin/ui";
import { VisaForm } from "@/components/admin/visa-form";
import { createVisa } from "../actions";

export const dynamic = "force-dynamic";

export default function NewVisaPage() {
  return (
    <div>
      <PageHeader title="New Country" subtitle="Add a visa country." />
      <VisaForm action={createVisa} />
    </div>
  );
}
