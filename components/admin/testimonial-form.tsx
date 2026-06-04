"use client";

import {
  Field,
  TextInput,
  TextArea,
  Select,
  Checkbox,
  ImageField,
  SubmitButton,
  CancelLink,
} from "./ui";

export type TestimonialDefaults = {
  name: string;
  meta: string;
  text: string;
  rating: number;
  photo: string | null;
  sortOrder: number;
  isActive: boolean;
};

const empty: TestimonialDefaults = {
  name: "",
  meta: "",
  text: "",
  rating: 5,
  photo: null,
  sortOrder: 0,
  isActive: true,
};

export function TestimonialForm({
  action,
  defaults,
}: {
  action: (formData: FormData) => void;
  defaults?: Partial<TestimonialDefaults>;
}) {
  const d = { ...empty, ...defaults };
  return (
    <form action={action} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name">
          <TextInput name="name" defaultValue={d.name} required placeholder="Ahmed Raza" />
        </Field>
        <Field label="Meta" hint="e.g. Multan · Umrah 2025">
          <TextInput name="meta" defaultValue={d.meta} />
        </Field>
      </div>

      <Field label="Review text">
        <TextArea name="text" defaultValue={d.text} rows={4} required />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Rating">
          <Select name="rating" defaultValue={String(d.rating)}>
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>
                {n} ★
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Sort order">
          <TextInput type="number" name="sortOrder" defaultValue={d.sortOrder} />
        </Field>
      </div>

      <ImageField name="photo" label="Photo (optional)" current={d.photo} />

      <Checkbox name="isActive" label="Active (visible on site)" defaultChecked={d.isActive} />

      <div className="flex gap-3 pt-2">
        <SubmitButton>Save</SubmitButton>
        <CancelLink href="/admin/testimonials" />
      </div>
    </form>
  );
}
