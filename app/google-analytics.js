"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GoogleAnalytics({ measurementId }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "function") {
      return;
    }

    const queryString = window.location.search.replace(/^\?/, "");
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title
    });
  }, [pathname, measurementId]);

  return null;
}
