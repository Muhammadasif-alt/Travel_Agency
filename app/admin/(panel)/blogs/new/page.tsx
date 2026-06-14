import { PageHeader } from "@/components/admin/ui";
import { BlogForm } from "@/components/admin/blog-form";
import { createBlog } from "../actions";

export const dynamic = "force-dynamic";

export default function NewBlogPage() {
  return (
    <div>
      <PageHeader title="New Post" subtitle="A new blog / news article." />
      <BlogForm action={createBlog} />
    </div>
  );
}
