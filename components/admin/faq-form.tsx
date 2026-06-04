"use client";

import { Field, TextInput, TextArea, Checkbox, SubmitButton, CancelLink } from "./ui";

export type FaqDefaults = {
  question: string;
  answer: string;
  sortOrder: number;
  isActive: boolean;
};

const empty: FaqDefaults = {
  question: "",
  answer: "",
  sortOrder: 0,
  isActive: true,
};

export function FaqForm({
  action,
  defaults,
}: {
  action: (formData: FormData) => void;
  defaults?: Partial<FaqDefaults>;
}) {
  const d = { ...empty, ...defaults };
  return (
    <form action={action} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-2xl">
      <Field label="Question">
        <TextInput name="question" defaultValue={d.question} required placeholder="What is included in an Umrah package?" />
      </Field>
      <Field label="Answer">
        <TextArea name="answer" defaultValue={d.answer} rows={4} required />
      </Field>
      <Field label="Sort order">
        <TextInput type="number" name="sortOrder" defaultValue={d.sortOrder} />
      </Field>
      <Checkbox name="isActive" label="Active (visible on site)" defaultChecked={d.isActive} />
      <div className="flex gap-3 pt-2">
        <SubmitButton>Save</SubmitButton>
        <CancelLink href="/admin/faqs" />
      </div>
    </form>
  );
}
