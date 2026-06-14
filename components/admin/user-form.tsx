"use client";

import { useActionState } from "react";
import { Field, TextInput, Select, CancelLink } from "./ui";
import type { UserState } from "@/app/admin/(panel)/users/actions";

type Defaults = { email?: string; name?: string; role?: string };

function Save({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="h-11 px-6 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors disabled:opacity-60"
    >
      {pending ? "Saving…" : "Save user"}
    </button>
  );
}

export function UserForm({
  action,
  defaults,
  isEdit = false,
}: {
  action: (prev: UserState, formData: FormData) => Promise<UserState>;
  defaults?: Defaults;
  isEdit?: boolean;
}) {
  const [state, formAction, pending] = useActionState<UserState, FormData>(action, {});

  return (
    <form action={formAction} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-xl">
      <Field label="Email" hint={isEdit ? "Email can’t be changed" : undefined}>
        <TextInput
          name="email"
          type="email"
          defaultValue={defaults?.email}
          required={!isEdit}
          disabled={isEdit}
          placeholder="staff@nusaratmadina.com"
        />
      </Field>
      <Field label="Name">
        <TextInput name="name" defaultValue={defaults?.name} required placeholder="Full name" />
      </Field>
      <Field label="Role">
        <Select name="role" defaultValue={defaults?.role ?? "EDITOR"}>
          <option value="EDITOR">Editor (content only)</option>
          <option value="ADMIN">Admin (full access)</option>
        </Select>
      </Field>
      <Field
        label={isEdit ? "New password" : "Password"}
        hint={isEdit ? "Leave empty to keep the current password" : "At least 6 characters"}
      >
        <TextInput name="password" type="password" required={!isEdit} placeholder="••••••••" />
      </Field>

      {state.error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {state.error}
        </p>
      )}

      <div className="flex gap-3 pt-2">
        <Save pending={pending} />
        <CancelLink href="/admin/users" />
      </div>
    </form>
  );
}
