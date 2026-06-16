import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deleteInquiry } from "./actions";
import { serviceLabel } from "./helpers";

export const dynamic = "force-dynamic";

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
}

export default async function InquiriesAdmin() {
  const items = await prisma.inquiry.findMany({ orderBy: { createdAt: "desc" } });
  const unread = items.filter((i) => !i.isRead).length;

  return (
    <div>
      <PageHeader
        title="Inquiries"
        subtitle={
          unread > 0
            ? `${unread} new message${unread === 1 ? "" : "s"} from the contact form.`
            : "Messages submitted through the website contact form."
        }
      />

      <Table head={["", "Name", "Service", "Phone", "Received", "Actions"]}>
        {items.map((i) => (
          <tr key={i.id} className={i.isRead ? "hover:bg-gray-50" : "bg-brand-50/40 hover:bg-brand-50"}>
            <td className="px-4 py-3">
              {!i.isRead && (
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-light" title="New" />
              )}
            </td>
            <td className="px-4 py-3">
              <Link
                href={`/admin/inquiries/${i.id}`}
                className={i.isRead ? "text-gray-800 hover:text-brand" : "font-bold text-brand hover:text-brand-light"}
              >
                {i.name}
              </Link>
              <div className="text-xs text-muted-foreground">{i.email}</div>
            </td>
            <td className="px-4 py-3 text-muted-foreground">{serviceLabel(i.service)}</td>
            <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{i.phone}</td>
            <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{formatDate(i.createdAt)}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link href={`/admin/inquiries/${i.id}`} className="text-sm font-semibold text-brand-light hover:text-brand">
                  View
                </Link>
                <DeleteButton action={deleteInquiry} id={i.id} />
              </div>
            </td>
          </tr>
        ))}
        {items.length === 0 && (
          <tr>
            <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
              No inquiries yet. Messages from the website contact form will appear here.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
