import { PageHeader } from "@/components/admin/ui";
import { VisaForm } from "@/components/admin/visa-form";
import { createVisa } from "../actions";

export const dynamic = "force-dynamic";

export default function NewVisaPage() {
  return (
    <div>
      <PageHeader title="New Country" subtitle="Visa country add karein." />
      <VisaForm action={createVisa} />
    </div>
  );
}
