"use client";

import {
  Field,
  TextInput,
  Select,
  Checkbox,
  ImageField,
  SubmitButton,
  CancelLink,
} from "./ui";

export type FlightDefaults = {
  scope: string;
  fromCity: string;
  toCode: string;
  city: string;
  country: string;
  airline: string;
  tripType: string;
  price: string;
  image: string | null;
  sortOrder: number;
  isActive: boolean;
};

const empty: FlightDefaults = {
  scope: "INTERNATIONAL",
  fromCity: "",
  toCode: "",
  city: "",
  country: "",
  airline: "",
  tripType: "Return",
  price: "",
  image: null,
  sortOrder: 0,
  isActive: true,
};

export function FlightForm({
  action,
  defaults,
}: {
  action: (formData: FormData) => void;
  defaults?: Partial<FlightDefaults>;
}) {
  const d = { ...empty, ...defaults };
  return (
    <form action={action} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Scope">
          <Select name="scope" defaultValue={d.scope}>
            <option value="INTERNATIONAL">International</option>
            <option value="DOMESTIC">Domestic</option>
          </Select>
        </Field>
        <Field label="Trip type">
          <Select name="tripType" defaultValue={d.tripType}>
            <option value="Return">Return</option>
            <option value="One-way">One-way</option>
          </Select>
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="From (city)">
          <TextInput name="fromCity" defaultValue={d.fromCity} required placeholder="Multan" />
        </Field>
        <Field label="To (airport code)">
          <TextInput name="toCode" defaultValue={d.toCode} required placeholder="JED" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Destination city">
          <TextInput name="city" defaultValue={d.city} required placeholder="Jeddah" />
        </Field>
        <Field label="Country">
          <TextInput name="country" defaultValue={d.country} required placeholder="Saudi Arabia" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <Field label="Airline">
          <TextInput name="airline" defaultValue={d.airline} required placeholder="Saudia" />
        </Field>
        <Field label="Price">
          <TextInput name="price" defaultValue={d.price} required placeholder="PKR 145,000" />
        </Field>
        <Field label="Sort order">
          <TextInput type="number" name="sortOrder" defaultValue={d.sortOrder} />
        </Field>
      </div>

      <ImageField name="image" label="Image" current={d.image} />

      <Checkbox name="isActive" label="Active (visible on site)" defaultChecked={d.isActive} />

      <div className="flex gap-3 pt-2">
        <SubmitButton>Save flight</SubmitButton>
        <CancelLink href="/admin/flights" />
      </div>
    </form>
  );
}
