import { PageHeader } from "@/components/admin/ui";
import { FaqForm } from "@/components/admin/faq-form";
import { createFaq } from "../actions";

export const dynamic = "force-dynamic";

export default function NewFaqPage() {
  return (
    <div>
      <PageHeader title="New FAQ" subtitle="Add a new question & answer." />
      <FaqForm action={createFaq} />
    </div>
  );
}
