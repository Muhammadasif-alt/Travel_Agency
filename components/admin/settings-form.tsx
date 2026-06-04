"use client";

import { useActionState } from "react";
import { Field, TextInput, Select } from "./ui";
import { updateSettings, type SettingsState } from "@/app/admin/(panel)/settings/actions";

type Settings = {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  facebookUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  hajjStatus: string;
  hajjYear: number;
  hajjNextYear: number;
};

function Save({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="h-11 px-6 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors disabled:opacity-60"
    >
      {pending ? "Saving…" : "Save settings"}
    </button>
  );
}

export function SettingsForm({ settings }: { settings: Settings }) {
  const [state, formAction, pending] = useActionState<SettingsState, FormData>(
    updateSettings,
    {}
  );

  return (
    <form action={formAction} className="space-y-6 max-w-2xl">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 className="font-bold text-brand">Contact details</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Phone">
            <TextInput name="phone" defaultValue={settings.phone} />
          </Field>
          <Field label="WhatsApp">
            <TextInput name="whatsapp" defaultValue={settings.whatsapp} />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Email">
            <TextInput name="email" type="email" defaultValue={settings.email} />
          </Field>
          <Field label="Address">
            <TextInput name="address" defaultValue={settings.address} />
          </Field>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 className="font-bold text-brand">Social links</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          <Field label="Facebook URL">
            <TextInput name="facebookUrl" defaultValue={settings.facebookUrl} placeholder="https://facebook.com/..." />
          </Field>
          <Field label="Instagram URL">
            <TextInput name="instagramUrl" defaultValue={settings.instagramUrl} placeholder="https://instagram.com/..." />
          </Field>
          <Field label="TikTok URL">
            <TextInput name="tiktokUrl" defaultValue={settings.tiktokUrl} placeholder="https://tiktok.com/@..." />
          </Field>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 className="font-bold text-brand">Hajj season</h2>
        <p className="text-sm text-muted-foreground -mt-3">
          Jab current saal ka Hajj band ho jaye, &ldquo;Closed — pre-register next year&rdquo;
          choose karein. Hajj page khud pre-registration mode mein chala jayega.
        </p>
        <Field label="Status">
          <Select name="hajjStatus" defaultValue={settings.hajjStatus}>
            <option value="booking-open">Booking open (current year)</option>
            <option value="closed-next-open">Closed — pre-register next year</option>
          </Select>
        </Field>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Current Hajj year">
            <TextInput type="number" name="hajjYear" defaultValue={settings.hajjYear} />
          </Field>
          <Field label="Next Hajj year (pre-registration)">
            <TextInput type="number" name="hajjNextYear" defaultValue={settings.hajjNextYear} />
          </Field>
        </div>
      </div>

      {state.ok && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
          Settings save ho gayi. ✓
        </p>
      )}
      {state.error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {state.error}
        </p>
      )}

      <Save pending={pending} />
    </form>
  );
}
