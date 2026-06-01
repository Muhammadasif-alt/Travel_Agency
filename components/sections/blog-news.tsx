import Image from "next/image";
import { Pill } from "./section-header";
import { blogPosts } from "@/lib/site-data";

export function BlogNews() {
  return (
    <section className="px-[5%] py-20 max-w-[1200px] mx-auto">
      <div className="text-center mb-12">
        <Pill>News &amp; Blogs</Pill>
        <h2 className="text-3xl md:text-[40px] font-extrabold text-brand mt-5">
          Latest News &amp; Travel Updates
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((p) => (
          <article
            key={p.title}
            className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/30 to-transparent" />

            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <span className="self-start bg-white text-brand-light text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
                {p.category}
              </span>
              <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
              <p className="text-sm text-white/80 mt-2 line-clamp-2">
                {p.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/80 mt-3">
                <span>🕒</span>
                {p.date}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
