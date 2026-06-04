import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/ui";
import { BlogForm } from "@/components/admin/blog-form";
import { updateBlog } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = await prisma.blogPost.findUnique({ where: { id } });
  if (!p) notFound();

  const update = updateBlog.bind(null, id);

  return (
    <div>
      <PageHeader title="Edit Post" subtitle={p.title} />
      <BlogForm
        action={update}
        defaults={{
          title: p.title,
          slug: p.slug,
          category: p.category,
          date: p.date,
          image: p.image,
          excerpt: p.excerpt,
          content: p.content ?? "",
          published: p.published,
          sortOrder: p.sortOrder,
        }}
      />
    </div>
  );
}
