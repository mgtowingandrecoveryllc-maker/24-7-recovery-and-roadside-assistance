import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Roadside Help Blog | MG Towing & Recovery",
  description:
    "Practical tips and guides for drivers in Islamabad and Rawalpindi — battery failures, flat tyres, tyre pressure, emergency kits, and more.",
};

export default function BlogPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Driver Resources
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Roadside Help Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical guides for drivers in Islamabad and Rawalpindi — written by your local
            24/7 roadside assistance team.
          </p>
        </div>
      </section>

      {/* ── Article grid ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col"
              >
                {/* Card image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category badge over image */}
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-gray-400 font-medium mb-2">{post.date}</p>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3 leading-snug group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-red-600 font-bold text-sm hover:text-red-700 transition-colors"
                  >
                    Read article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────────────────── */}
      <section className="bg-red-600 py-12 px-4 text-center">
        <p className="text-white text-lg font-medium mb-2">
          Stranded right now? Don&apos;t read — call.
        </p>
        <a
          href="tel:+923269751717"
          className="inline-flex items-center gap-2 bg-white text-red-600 font-extrabold text-xl px-8 py-4 rounded-xl hover:bg-red-50 transition-colors shadow-lg"
        >
          0326 9751717 — Call Now
        </a>
        <p className="text-red-200 text-sm mt-3">24/7 · Islamabad &amp; Rawalpindi</p>
      </section>
    </main>
  );
}
