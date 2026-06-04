"use client";

import {
  Field,
  TextInput,
  Checkbox,
  ImageField,
  SubmitButton,
  CancelLink,
} from "./ui";

export type TeamDefaults = {
  name: string;
  role: string;
  photo: string | null;
  sortOrder: number;
  isActive: boolean;
};

const empty: TeamDefaults = {
  name: "",
  role: "",
  photo: null,
  sortOrder: 0,
  isActive: true,
};

export function TeamForm({
  action,
  defaults,
}: {
  action: (formData: FormData) => void;
  defaults?: Partial<TeamDefaults>;
}) {
  const d = { ...empty, ...defaults };
  return (
    <form action={action} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name">
          <TextInput name="name" defaultValue={d.name} required placeholder="Rao Shafeeq" />
        </Field>
        <Field label="Role">
          <TextInput name="role" defaultValue={d.role} required placeholder="Owner & CEO" />
        </Field>
      </div>

      <ImageField name="photo" label="Photo (optional)" current={d.photo} />

      <Field label="Sort order">
        <TextInput type="number" name="sortOrder" defaultValue={d.sortOrder} />
      </Field>

      <Checkbox name="isActive" label="Active (visible on site)" defaultChecked={d.isActive} />

      <div className="flex gap-3 pt-2">
        <SubmitButton>Save</SubmitButton>
        <CancelLink href="/admin/team" />
      </div>
    </form>
  );
}
