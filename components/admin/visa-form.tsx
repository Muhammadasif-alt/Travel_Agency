"use client";

import { Field, TextInput, Checkbox, SubmitButton, CancelLink } from "./ui";

export type VisaDefaults = {
  country: string;
  flag: string;
  visaType: string;
  processingTime: string;
  startingPrice: string;
  sortOrder: number;
  isActive: boolean;
};

const empty: VisaDefaults = {
  country: "",
  flag: "",
  visaType: "",
  processingTime: "",
  startingPrice: "",
  sortOrder: 0,
  isActive: true,
};

export function VisaForm({
  action,
  defaults,
}: {
  action: (formData: FormData) => void;
  defaults?: Partial<VisaDefaults>;
}) {
  const d = { ...empty, ...defaults };
  return (
    <form action={action} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Country">
          <TextInput name="country" defaultValue={d.country} required placeholder="Saudi Arabia" />
        </Field>
        <Field label="Flag (emoji)">
          <TextInput name="flag" defaultValue={d.flag} placeholder="🇸🇦" />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Visa type">
          <TextInput name="visaType" defaultValue={d.visaType} placeholder="Umrah / Visit" />
        </Field>
        <Field label="Processing time">
          <TextInput name="processingTime" defaultValue={d.processingTime} placeholder="5–10 days" />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Starting price">
          <TextInput name="startingPrice" defaultValue={d.startingPrice} placeholder="PKR 35,000" />
        </Field>
        <Field label="Sort order">
          <TextInput type="number" name="sortOrder" defaultValue={d.sortOrder} />
        </Field>
      </div>
      <Checkbox name="isActive" label="Active (visible on site)" defaultChecked={d.isActive} />
      <div className="flex gap-3 pt-2">
        <SubmitButton>Save</SubmitButton>
        <CancelLink href="/admin/visa" />
      </div>
    </form>
  );
}
