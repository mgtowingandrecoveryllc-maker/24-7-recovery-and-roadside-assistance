import Script from "next/script";

const TRUSTINDEX_LOADER_URL =
  "https://cdn.trustindex.io/loader.js?359ba7276a0f190362465ecae34";

export default function GoogleReviewsWidget() {
  return (
    <>
      {/* Trustindex scans the DOM for an element whose src/data-src matches the
          loader URL and injects the widget directly into it. */}
      <div data-src={TRUSTINDEX_LOADER_URL} className="w-full min-h-[200px]" />
      {/* Shared id across every page so Next.js loads this script only once
          per session instead of once per page. */}
      <Script
        id="trustindex-loader-script"
        src={TRUSTINDEX_LOADER_URL}
        strategy="afterInteractive"
      />
    </>
  );
}
