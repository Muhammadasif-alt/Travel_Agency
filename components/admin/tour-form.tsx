"use client";

import { Field, TextInput, TextArea, Checkbox, SubmitButton, CancelLink } from "./ui";

export type TourDefaults = {
  destination: string;
  flag: string;
  nights: string;
  startingPrice: string;
  highlights: string;
  sortOrder: number;
  isActive: boolean;
};

const empty: TourDefaults = {
  destination: "",
  flag: "",
  nights: "",
  startingPrice: "",
  highlights: "",
  sortOrder: 0,
  isActive: true,
};

export function TourForm({
  action,
  defaults,
}: {
  action: (formData: FormData) => void;
  defaults?: Partial<TourDefaults>;
}) {
  const d = { ...empty, ...defaults };
  return (
    <form action={action} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Destination">
          <TextInput name="destination" defaultValue={d.destination} required placeholder="Dubai" />
        </Field>
        <Field label="Flag (emoji)">
          <TextInput name="flag" defaultValue={d.flag} placeholder="🇦🇪" />
        </Field>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        <Field label="Nights">
          <TextInput name="nights" defaultValue={d.nights} placeholder="4 nights / 5 days" />
        </Field>
        <Field label="Starting price">
          <TextInput name="startingPrice" defaultValue={d.startingPrice} placeholder="PKR 165,000" />
        </Field>
        <Field label="Sort order">
          <TextInput type="number" name="sortOrder" defaultValue={d.sortOrder} />
        </Field>
      </div>
      <Field label="Highlights">
        <TextArea name="highlights" defaultValue={d.highlights} rows={3} placeholder="Burj Khalifa, desert safari, Dubai Mall..." />
      </Field>
      <Checkbox name="isActive" label="Active (visible on site)" defaultChecked={d.isActive} />
      <div className="flex gap-3 pt-2">
        <SubmitButton>Save</SubmitButton>
        <CancelLink href="/admin/tours" />
      </div>
    </form>
  );
}
