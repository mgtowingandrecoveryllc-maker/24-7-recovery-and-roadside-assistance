import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { posts, getPostBySlug } from "../posts";
import { extractHeadings, injectHeadingIds, TableOfContents } from "@/lib/toc";

// Pre-render all blog post pages at build time
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// Per-post SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | MG Towing & Recovery Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Other posts for the "Related articles" strip
  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  const headings = extractHeadings(post.content);
  const contentWithIds = injectHeadingIds(post.content);

  return (
    <main>
      {/* ── Article hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-gray-900 py-16 px-4 overflow-hidden">
        {/* Background image (low opacity) */}
        <Image
          src={post.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 text-sm font-medium mb-6 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="bg-red-600 text-white text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ── Featured image ───────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 -mt-8 mb-12">
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-4 pb-16">
        <TableOfContents headings={headings} />
        <div
          className="
            [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-5 [&_p]:text-[17px]
            [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-3
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-7 [&_h3]:mb-2
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-1
            [&_li]:text-gray-700 [&_li]:leading-relaxed
          "
        >
          {contentWithIds}
        </div>

        {/* ── Inline CTA ───────────────────────────────────────────────── */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2">
            Need Help Right Now?
          </p>
          <p className="text-white text-xl font-extrabold mb-4">
            Our team is available 24/7 across Islamabad &amp; Rawalpindi
          </p>
          <a
            href="tel:+923269751717"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Call 0326 9751717
          </a>
          <p className="text-gray-500 text-sm mt-3">
            Jump Start · Tyre Change · Air Refill · Towing · Lockout
          </p>
        </div>
      </article>

      {/* ── Related articles ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-12 px-4 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">More Articles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 mb-1">
                      {p.category}
                    </span>
                    <p className="text-sm font-bold text-gray-900 leading-snug group-hover:text-red-600 transition-colors">
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
