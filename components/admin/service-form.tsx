"use client";

import {
  Field,
  TextInput,
  TextArea,
  Checkbox,
  ImageField,
  SubmitButton,
  CancelLink,
} from "./ui";

export type ServiceDefaults = {
  slug: string;
  href: string;
  icon: string;
  image: string | null;
  title: string;
  desc: string;
  long: string;
  points: string[];
  startingPrice: string;
  isNew: boolean;
  sortOrder: number;
  isActive: boolean;
};

const empty: ServiceDefaults = {
  slug: "",
  href: "/contact",
  icon: "",
  image: null,
  title: "",
  desc: "",
  long: "",
  points: [],
  startingPrice: "",
  isNew: false,
  sortOrder: 0,
  isActive: true,
};

export function ServiceForm({
  action,
  defaults,
}: {
  action: (formData: FormData) => void;
  defaults?: Partial<ServiceDefaults>;
}) {
  const d = { ...empty, ...defaults };
  return (
    <form action={action} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Title">
          <TextInput name="title" defaultValue={d.title} required placeholder="Hajj Packages" />
        </Field>
        <Field label="Icon (emoji)">
          <TextInput name="icon" defaultValue={d.icon} placeholder="🕌" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <Field label="Link (href)">
          <TextInput name="href" defaultValue={d.href} placeholder="/hajj" />
        </Field>
        <Field label="Starting price" hint="optional">
          <TextInput name="startingPrice" defaultValue={d.startingPrice} placeholder="PKR 9,50,000" />
        </Field>
        <Field label="Sort order">
          <TextInput type="number" name="sortOrder" defaultValue={d.sortOrder} />
        </Field>
      </div>

      <Field label="Short tagline (desc)">
        <TextInput name="desc" defaultValue={d.desc} placeholder="Economy to VIP options" />
      </Field>

      <Field label="Full description (long)">
        <TextArea name="long" defaultValue={d.long} rows={4} required />
      </Field>

      <Field label="Bullet points" hint="Har point nayi line par">
        <TextArea name="points" defaultValue={d.points.join("\n")} rows={4} />
      </Field>

      <Field label="Slug" hint="Khali chhorein to title se ban jayega">
        <TextInput name="slug" defaultValue={d.slug} placeholder="hajj" />
      </Field>

      <ImageField name="image" label="Image" current={d.image} />

      <div className="flex flex-wrap gap-5 pt-1">
        <Checkbox name="isNew" label="Show NEW badge" defaultChecked={d.isNew} />
        <Checkbox name="isActive" label="Active (visible on site)" defaultChecked={d.isActive} />
      </div>

      <div className="flex gap-3 pt-2">
        <SubmitButton>Save service</SubmitButton>
        <CancelLink href="/admin/services" />
      </div>
    </form>
  );
}
