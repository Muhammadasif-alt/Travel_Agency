import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog & Travel Updates — Hajj, Umrah & Visa News",
  description:
    "Latest Hajj & Umrah guides, visa updates and travel tips from Nusarat Madina, Lodhran.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndex() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHero
        image={images.aboutBanner}
        imageAlt="Travel news"
        eyebrow="NEWS & BLOGS"
        title="Travel Updates & Guides"
        subtitle="Hajj & Umrah tips, visa rule changes and travel news for Pakistani pilgrims."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="px-[5%] py-16 max-w-[1440px] mx-auto">
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No articles published yet — new posts are coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white text-brand-light text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs text-muted-foreground mb-2">{p.date}</div>
                  <h2 className="font-bold text-brand leading-snug">{p.title}</h2>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3 flex-1">
                    {p.excerpt}
                  </p>
                  <span className="text-brand-light font-semibold text-sm mt-4 group-hover:translate-x-1 transition-transform">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
