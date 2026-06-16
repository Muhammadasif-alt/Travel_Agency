import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHeader, DeleteButton } from "@/components/admin/ui";
import { InquiryRead } from "@/components/admin/inquiry-read";
import { deleteInquiry } from "../actions";
import { serviceLabel } from "../helpers";

export const dynamic = "force-dynamic";

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("en-PK", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
}

async function deleteAndBack(formData: FormData) {
  "use server";
  await deleteInquiry(formData);
  redirect("/admin/inquiries");
}

export default async function InquiryDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const inquiry = await prisma.inquiry.findUnique({ where: { id } });
  if (!inquiry) notFound();

  const waNumber = inquiry.phone.replace(/[^0-9]/g, "");

  return (
    <div className="max-w-3xl">
      <Link
        href="/admin/inquiries"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand mb-4"
      >
        <ArrowLeft size={16} /> Back to inquiries
      </Link>

      <PageHeader
        title={inquiry.name}
        subtitle={`${serviceLabel(inquiry.service)} · ${formatDate(inquiry.createdAt)}`}
      />

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        {/* Contact row */}
        <div className="grid sm:grid-cols-2 gap-3">
          <a
            href={`tel:${inquiry.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 hover:border-brand-light transition-colors"
          >
            <Phone size={18} className="text-brand-light flex-shrink-0" />
            <span className="min-w-0">
              <span className="block text-xs text-gray-500">Phone</span>
              <span className="block font-semibold text-gray-800 truncate">{inquiry.phone}</span>
            </span>
          </a>
          <a
            href={`mailto:${inquiry.email}`}
            className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 hover:border-brand-light transition-colors"
          >
            <Mail size={18} className="text-brand-light flex-shrink-0" />
            <span className="min-w-0">
              <span className="block text-xs text-gray-500">Email</span>
              <span className="block font-semibold text-gray-800 truncate">{inquiry.email}</span>
            </span>
          </a>
        </div>

        {/* Message */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
            Message
          </div>
          <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{inquiry.message}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-5 inline-flex items-center rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            Reply on WhatsApp
          </a>
          <a
            href={`mailto:${inquiry.email}`}
            className="h-11 px-5 inline-flex items-center rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            Reply by Email
          </a>
          <InquiryRead id={inquiry.id} isRead={inquiry.isRead} />
          <div className="ml-auto flex items-center">
            <form
              action={deleteAndBack}
            >
              <input type="hidden" name="id" value={inquiry.id} />
              <button
                type="submit"
                className="h-11 px-5 inline-flex items-center rounded-lg text-red-600 font-semibold hover:bg-red-50 transition-colors"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
