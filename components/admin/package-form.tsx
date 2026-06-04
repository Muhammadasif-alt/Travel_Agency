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

export type PackageDefaults = {
  type: string;
  title: string;
  image: string | null;
  imageAlt: string;
  tag: string;
  tagVariant: string;
  discount: string;
  meta: string;
  features: string[];
  oldPrice: string;
  newPrice: string;
  priceLabel: string;
  featured: boolean;
  showOnHome: boolean;
  sortOrder: number;
  isActive: boolean;
};

const empty: PackageDefaults = {
  type: "UMRAH",
  title: "",
  image: null,
  imageAlt: "",
  tag: "",
  tagVariant: "default",
  discount: "",
  meta: "",
  features: [],
  oldPrice: "",
  newPrice: "",
  priceLabel: "Starting from",
  featured: false,
  showOnHome: false,
  sortOrder: 0,
  isActive: true,
};

export function PackageForm({
  action,
  defaults,
}: {
  action: (formData: FormData) => void;
  defaults?: Partial<PackageDefaults>;
}) {
  const d = { ...empty, ...defaults };

  return (
    <form action={action} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Type">
          <Select name="type" defaultValue={d.type}>
            <option value="UMRAH">Umrah</option>
            <option value="HAJJ">Hajj</option>
          </Select>
        </Field>
        <Field label="Sort order" hint="Chhota number pehle dikhega">
          <TextInput type="number" name="sortOrder" defaultValue={d.sortOrder} />
        </Field>
      </div>

      <Field label="Title">
        <TextInput name="title" defaultValue={d.title} required placeholder="14-Day Umrah Package" />
      </Field>

      <div className="grid sm:grid-cols-3 gap-5">
        <Field label="New price">
          <TextInput name="newPrice" defaultValue={d.newPrice} required placeholder="PKR 2,95,000" />
        </Field>
        <Field label="Old price" hint="optional (strike-through)">
          <TextInput name="oldPrice" defaultValue={d.oldPrice} placeholder="PKR 3,50,000" />
        </Field>
        <Field label="Price label">
          <TextInput name="priceLabel" defaultValue={d.priceLabel} placeholder="Starting from" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <Field label="Tag">
          <TextInput name="tag" defaultValue={d.tag} placeholder="ECONOMY" />
        </Field>
        <Field label="Tag style">
          <Select name="tagVariant" defaultValue={d.tagVariant}>
            <option value="default">Default</option>
            <option value="popular">Popular (highlight)</option>
          </Select>
        </Field>
        <Field label="Discount badge" hint="optional">
          <TextInput name="discount" defaultValue={d.discount} placeholder="-15% OFF" />
        </Field>
      </div>

      <Field label="Meta line" hint="e.g. 📍 Makkah · Madinah | ✈️ Saudia Airlines">
        <TextInput name="meta" defaultValue={d.meta} />
      </Field>

      <Field label="Features" hint="Har feature nayi line par (e.g. ✓ 4★ Hotel)">
        <TextArea name="features" defaultValue={d.features.join("\n")} rows={4} />
      </Field>

      <ImageField name="image" label="Cover image" current={d.image} />
      <Field label="Image alt text">
        <TextInput name="imageAlt" defaultValue={d.imageAlt} placeholder="Kaaba in Masjid al-Haram" />
      </Field>

      <div className="flex flex-wrap gap-5 pt-1">
        <Checkbox name="featured" label="Featured" defaultChecked={d.featured} />
        <Checkbox name="showOnHome" label="Show on home page" defaultChecked={d.showOnHome} />
        <Checkbox name="isActive" label="Active (visible on site)" defaultChecked={d.isActive} />
      </div>

      <div className="flex gap-3 pt-2">
        <SubmitButton>Save package</SubmitButton>
        <CancelLink href="/admin/packages" />
      </div>
    </form>
  );
}
