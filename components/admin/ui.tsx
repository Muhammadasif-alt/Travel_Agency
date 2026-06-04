"use client";

import { useFormStatus } from "react-dom";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ---------------------------------------------------------------- Page header */
export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-extrabold text-brand">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}

/* ---------------------------------------------------------------- Form fields */
const labelCls = "block text-sm font-medium text-gray-700 mb-1.5";
const inputCls =
  "w-full h-11 px-3.5 rounded-lg border border-gray-300 bg-white focus:border-brand-light focus:ring-2 focus:ring-brand-light/30 outline-none text-sm";

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

export function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <input {...props} className={inputCls} />;
}

export function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white focus:border-brand-light focus:ring-2 focus:ring-brand-light/30 outline-none text-sm min-h-[90px]"
    />
  );
}

export function Select({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={inputCls}>
      {children}
    </select>
  );
}

export function Checkbox({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex items-center gap-2.5 text-sm font-medium text-gray-700 cursor-pointer select-none">
      <input
        type="checkbox"
        {...props}
        className="w-4 h-4 rounded border-gray-300 text-brand-light focus:ring-brand-light"
      />
      {label}
    </label>
  );
}

/* ---------------------------------------------------------------- Image upload */
export function ImageField({
  name,
  label = "Image",
  current,
}: {
  name: string;
  label?: string;
  current?: string | null;
}) {
  const [preview, setPreview] = useState<string | null>(current ?? null);

  return (
    <Field label={label} hint="Naya image upload karein (ya khali chhorein purana rakhne ke liye).">
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0">
          {preview ? (
            <Image src={preview} alt="preview" fill sizes="96px" className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
              No image
            </div>
          )}
        </div>
        <input
          type="file"
          name={name}
          accept="image/*"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) setPreview(URL.createObjectURL(f));
          }}
          className="text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-brand-100 file:text-brand file:font-semibold file:cursor-pointer"
        />
      </div>
      <input type="hidden" name={`${name}__current`} value={current ?? ""} />
    </Field>
  );
}

/* ---------------------------------------------------------------- Buttons */
export function SubmitButton({ children = "Save" }: { children?: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="h-11 px-6 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors disabled:opacity-60"
    >
      {pending ? "Saving…" : children}
    </button>
  );
}

export function CancelLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="h-11 px-6 inline-flex items-center rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
    >
      Cancel
    </Link>
  );
}

export function DeleteButton({
  action,
  id,
  label = "Delete",
}: {
  action: (formData: FormData) => void;
  id: string;
  label?: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm("Pakka delete karna hai? Yeh wapas nahi hoga.")) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="text-sm font-semibold text-red-600 hover:text-red-700"
      >
        {label}
      </button>
    </form>
  );
}

/* ---------------------------------------------------------------- Table */
export function Table({
  head,
  children,
}: {
  head: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            {head.map((h) => (
              <th key={h} className="text-left px-4 py-3 font-semibold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">{children}</tbody>
      </table>
    </div>
  );
}

export function FormError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
      {message}
    </p>
  );
}
