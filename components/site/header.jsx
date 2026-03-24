"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/site-content";

export function Header({ className, compact = false, forceDesktop = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <div className={cn("relative z-30", className)}>
      <div
        className={cn(
          "flex items-center justify-between rounded-[60px] bg-black text-white",
          compact
            ? "px-5 py-4 md:px-8 md:py-5"
            : "h-[116px] px-5 py-4 md:px-10 md:py-[30px]"
        )}
      >
        <Link aria-label="ParkTek home" className="shrink-0" href="/">
          <div
            className={cn(
              "relative overflow-hidden",
              compact ? "h-10 w-[112.86px]" : "h-14 w-[158px]"
            )}
          >
            <img
              alt="ParkTek"
              className="absolute left-[-25.83%] top-[-82.97%] h-[281.32%] w-[149.13%] max-w-none"
              height="56"
              src="/figma/hero/logo.png"
              width="158"
            />
          </div>
        </Link>

        <div className={cn("items-center gap-10", forceDesktop ? "flex" : "hidden xl:flex")}>
          <nav className="flex items-center gap-10 font-clash text-[22px] tracking-[2.2px]">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <Link
                className="transition-opacity hover:opacity-70"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="h-14 w-px bg-white/20" />

          <Link
            className="font-clash text-[22px] tracking-[2.2px] transition-opacity hover:opacity-70"
            href="/contact/"
          >
            Contact Us
          </Link>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5",
            forceDesktop ? "hidden" : "xl:hidden"
          )}
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="mt-3 rounded-[32px] bg-black/95 p-4 text-white shadow-card xl:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                className="rounded-2xl px-4 py-3 font-clash text-lg tracking-[0.08em] transition-colors hover:bg-white/10"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
