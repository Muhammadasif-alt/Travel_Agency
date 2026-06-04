"use client";

import { Field, TextInput, TextArea, Select, Checkbox, SubmitButton, CancelLink } from "./ui";

export type HotelDefaults = {
  name: string;
  city: string;
  stars: number;
  distance: string;
  startingPrice: string;
  perks: string[];
  sortOrder: number;
  isActive: boolean;
};

const empty: HotelDefaults = {
  name: "",
  city: "",
  stars: 5,
  distance: "",
  startingPrice: "",
  perks: [],
  sortOrder: 0,
  isActive: true,
};

export function HotelForm({
  action,
  defaults,
}: {
  action: (formData: FormData) => void;
  defaults?: Partial<HotelDefaults>;
}) {
  const d = { ...empty, ...defaults };
  return (
    <form action={action} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name">
          <TextInput name="name" defaultValue={d.name} required placeholder="Haram-View 5★ (Makkah)" />
        </Field>
        <Field label="City">
          <TextInput name="city" defaultValue={d.city} required placeholder="Makkah" />
        </Field>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        <Field label="Stars">
          <Select name="stars" defaultValue={String(d.stars)}>
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>{n} ★</option>
            ))}
          </Select>
        </Field>
        <Field label="Distance">
          <TextInput name="distance" defaultValue={d.distance} placeholder="0m · Kaaba view" />
        </Field>
        <Field label="Sort order">
          <TextInput type="number" name="sortOrder" defaultValue={d.sortOrder} />
        </Field>
      </div>
      <Field label="Starting price">
        <TextInput name="startingPrice" defaultValue={d.startingPrice} placeholder="PKR 28,000 / night" />
      </Field>
      <Field label="Perks" hint="Har perk nayi line par">
        <TextArea name="perks" defaultValue={d.perks.join("\n")} rows={4} />
      </Field>
      <Checkbox name="isActive" label="Active (visible on site)" defaultChecked={d.isActive} />
      <div className="flex gap-3 pt-2">
        <SubmitButton>Save</SubmitButton>
        <CancelLink href="/admin/hotels" />
      </div>
    </form>
  );
}
