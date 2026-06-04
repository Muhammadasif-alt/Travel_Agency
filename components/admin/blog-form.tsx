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

export type BlogDefaults = {
  title: string;
  slug: string;
  category: string;
  date: string;
  image: string | null;
  excerpt: string;
  content: string;
  published: boolean;
  sortOrder: number;
};

const empty: BlogDefaults = {
  title: "",
  slug: "",
  category: "News",
  date: "",
  image: null,
  excerpt: "",
  content: "",
  published: true,
  sortOrder: 0,
};

export function BlogForm({
  action,
  defaults,
}: {
  action: (formData: FormData) => void;
  defaults?: Partial<BlogDefaults>;
}) {
  const d = { ...empty, ...defaults };
  return (
    <form action={action} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-2xl">
      <Field label="Title">
        <TextInput name="title" defaultValue={d.title} required placeholder="Hajj 2026 Complete Guide" />
      </Field>

      <div className="grid sm:grid-cols-3 gap-5">
        <Field label="Category">
          <TextInput name="category" defaultValue={d.category} placeholder="Hajj / Umrah / Visa / News" />
        </Field>
        <Field label="Date label">
          <TextInput name="date" defaultValue={d.date} placeholder="April 17, 2026" />
        </Field>
        <Field label="Sort order">
          <TextInput type="number" name="sortOrder" defaultValue={d.sortOrder} />
        </Field>
      </div>

      <Field label="Slug (URL)" hint="Khali chhorein to title se khud ban jayega">
        <TextInput name="slug" defaultValue={d.slug} placeholder="hajj-2026-complete-guide" />
      </Field>

      <ImageField name="image" label="Cover image" current={d.image} />

      <Field label="Excerpt" hint="Short summary (cards par dikhega)">
        <TextArea name="excerpt" defaultValue={d.excerpt} rows={2} required />
      </Field>

      <Field label="Content" hint="Full article (optional). Plain text / paragraphs.">
        <TextArea name="content" defaultValue={d.content} rows={10} />
      </Field>

      <Checkbox name="published" label="Published (live on site)" defaultChecked={d.published} />

      <div className="flex gap-3 pt-2">
        <SubmitButton>Save post</SubmitButton>
        <CancelLink href="/admin/blogs" />
      </div>
    </form>
  );
}
