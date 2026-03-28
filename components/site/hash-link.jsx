"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useEffect } from "react";

function isVisible(element) {
  if (!element || element.getClientRects().length === 0) {
    return false;
  }

  const style = window.getComputedStyle(element);
  return style.display !== "none" && style.visibility !== "hidden";
}

export function scrollToVisibleHash(hash, { updateHistory = true } = {}) {
  const anchor = hash.startsWith("#") ? hash.slice(1) : hash;

  if (!anchor || typeof window === "undefined") {
    return false;
  }

  const selector = `[id="${CSS.escape(anchor)}"]`;
  const matches = Array.from(document.querySelectorAll(selector));
  const target = matches.find(isVisible) ?? null;

  if (!target) {
    return false;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });

  if (updateHistory) {
    const nextUrl = `${window.location.pathname}#${anchor}`;
    window.history.replaceState(null, "", nextUrl);
  }

  return true;
}

export const HashLink = forwardRef(function HashLink(
  { href, onClick, ...props },
  ref
) {
  const pathname = usePathname();
  const isHashOnly = typeof href === "string" && href.startsWith("#");
  const isHomeHash = typeof href === "string" && href.startsWith("/#");
  const targetHash = isHashOnly ? href : isHomeHash ? href.slice(1) : null;

  function handleClick(event) {
    onClick?.(event);

    if (event.defaultPrevented || !targetHash) {
      return;
    }

    if (pathname !== "/" && !isHashOnly) {
      return;
    }

    event.preventDefault();
    scrollToVisibleHash(targetHash);
  }

  return <Link {...props} href={href} onClick={handleClick} ref={ref} />;
});

export function HashScrollHandler() {
  useEffect(() => {
    function syncToHash() {
      if (!window.location.hash) {
        return;
      }

      window.requestAnimationFrame(() => {
        scrollToVisibleHash(window.location.hash, { updateHistory: false });
      });
    }

    syncToHash();
    window.addEventListener("hashchange", syncToHash);

    return () => window.removeEventListener("hashchange", syncToHash);
  }, []);

  return null;
}
