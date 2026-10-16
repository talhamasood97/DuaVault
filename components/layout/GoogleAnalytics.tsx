"use client";

import Script from "next/script";

export function GoogleAnalytics({ gaId: rawId }: { gaId: string }) {
  const gaId = rawId.trim();
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(gaId)}, {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
