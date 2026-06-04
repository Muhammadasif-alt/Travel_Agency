import { PageHeader } from "@/components/admin/ui";
import { TestimonialForm } from "@/components/admin/testimonial-form";
import { createTestimonial } from "../actions";

export const dynamic = "force-dynamic";

export default function NewTestimonialPage() {
  return (
    <div>
      <PageHeader title="New Story" subtitle="Pilgrim ka review add karein." />
      <TestimonialForm action={createTestimonial} />
    </div>
  );
}
