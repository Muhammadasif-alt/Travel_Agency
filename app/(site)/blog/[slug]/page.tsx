import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const more = (await getBlogPosts(4)).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="pb-20">
      <div className="relative h-[42vh] min-h-[300px] w-full">
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[820px] mx-auto px-[5%] pb-10 w-full text-white">
            <span className="inline-block bg-brand-light text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight drop-shadow">
              {post.title}
            </h1>
            <div className="text-sm text-white/80 mt-3">{post.date}</div>
          </div>
        </div>
      </div>

      <div className="max-w-[820px] mx-auto px-[5%] mt-10">
        <p className="text-lg text-gray-700 leading-relaxed font-medium">{post.excerpt}</p>
        {post.content && (
          <div className="mt-6 text-[15px] text-gray-700 leading-[1.9] space-y-4">
            {post.content.split(/\n\s*\n/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}

        <div className="mt-10 pt-8 border-t border-gray-100">
          <Link href="/blog" className="text-brand-light font-semibold hover:text-brand">
            ← All posts
          </Link>
        </div>
      </div>

      {more.length > 0 && (
        <div className="max-w-[1440px] mx-auto px-[5%] mt-16">
          <h2 className="text-xl font-extrabold text-brand mb-6">More articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {more.map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="relative h-40">
                  <Image src={p.image} alt={p.title} fill sizes="380px" className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground mb-1">{p.date}</div>
                  <h3 className="font-bold text-brand text-sm leading-snug line-clamp-2">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
