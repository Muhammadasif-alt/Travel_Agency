import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHeader, Table, DeleteButton } from "@/components/admin/ui";
import { deleteBlog } from "./actions";

export const dynamic = "force-dynamic";

export default async function BlogsAdmin() {
  const posts = await prisma.blogPost.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });

  return (
    <div>
      <PageHeader
        title="Blogs / News"
        subtitle="Travel updates and articles."
        action={
          <Link
            href="/admin/blogs/new"
            className="h-11 px-5 inline-flex items-center gap-2 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors"
          >
            <Plus size={18} /> New Post
          </Link>
        }
      />

      <Table head={["", "Title", "Category", "Date", "Published", "Actions"]}>
        {posts.map((p) => (
          <tr key={p.id} className="hover:bg-gray-50">
            <td className="px-4 py-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                {p.image && <Image src={p.image} alt={p.title} fill sizes="48px" className="object-cover" />}
              </div>
            </td>
            <td className="px-4 py-3 font-medium text-gray-800 max-w-xs truncate">{p.title}</td>
            <td className="px-4 py-3">{p.category}</td>
            <td className="px-4 py-3 whitespace-nowrap">{p.date}</td>
            <td className="px-4 py-3">{p.published ? "✓" : "—"}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-4">
                <Link href={`/admin/blogs/${p.id}`} className="text-sm font-semibold text-brand-light hover:text-brand">
                  Edit
                </Link>
                <DeleteButton action={deleteBlog} id={p.id} />
              </div>
            </td>
          </tr>
        ))}
        {posts.length === 0 && (
          <tr>
            <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
              No posts yet. Click &ldquo;New Post&rdquo; to add one.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
