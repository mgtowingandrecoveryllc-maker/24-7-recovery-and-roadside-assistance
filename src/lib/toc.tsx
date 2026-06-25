import React, { Children, cloneElement, isValidElement, type ReactNode } from "react";

export interface Heading {
  level: 1 | 2;
  text: string;
  id: string;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (!isValidElement(node)) return "";
  const el = node as React.ReactElement<{ children?: ReactNode }>;
  return Children.toArray(el.props.children).map(textOf).join("");
}

/** Walk the ReactNode tree and return every h1/h2 with a slugified id. */
export function extractHeadings(content: ReactNode): Heading[] {
  const result: Heading[] = [];

  function walk(node: ReactNode): void {
    if (!isValidElement(node)) return;
    const el = node as React.ReactElement<{ children?: ReactNode }>;

    if (el.type === "h1" || el.type === "h2") {
      const text = textOf(el.props.children);
      if (text) result.push({ level: el.type === "h1" ? 1 : 2, text, id: slugify(text) });
    }
    Children.forEach(el.props.children, walk);
  }

  walk(content);
  return result;
}

/** Clone the ReactNode tree, adding an id prop to every h1/h2 element. */
export function injectHeadingIds(content: ReactNode): ReactNode {
  function transform(node: ReactNode): ReactNode {
    if (!isValidElement(node)) return node;
    const el = node as React.ReactElement<any>;

    if (el.type === "h1" || el.type === "h2") {
      return cloneElement(el, { id: slugify(textOf(el.props.children)) });
    }

    if (el.props.children == null) return el;
    return cloneElement(el, {}, Children.map(el.props.children, transform));
  }

  return transform(content);
}

/** Renders a "In this article" box. Returns null when there are fewer than 3 headings. */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="mb-10 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-600">
        In this article
      </p>
      <ol className="space-y-2">
        {headings.map((h, i) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="flex items-start gap-2 text-sm leading-snug text-gray-700 transition-colors hover:text-red-600"
            >
              <span className="shrink-0 font-medium tabular-nums text-gray-400">{i + 1}.</span>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
