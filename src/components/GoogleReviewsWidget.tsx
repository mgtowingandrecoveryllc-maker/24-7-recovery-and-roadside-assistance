"use client";

import { useEffect, useRef } from "react";

const TRUSTINDEX_LOADER_URL =
  "https://cdn.trustindex.io/loader.js?359ba7276a0f190362465ecae34";

export default function GoogleReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Trustindex's loader replaces its own <script> tag in place with the
    // widget markup. Inserting it as a child of our own container (instead of
    // next/script, which always appends to the end of document.body) keeps
    // the widget inside this section instead of floating below the footer.
    const script = document.createElement("script");
    script.src = TRUSTINDEX_LOADER_URL;
    container.appendChild(script);

    return () => {
      // Remove on unmount so navigating to another page doesn't leave this
      // instance behind (Trustindex's script lives outside React's tree).
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="w-full min-h-[200px]" />;
}
