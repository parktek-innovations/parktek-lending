import Link from "next/link";

import { CONTACT_DETAILS, LEGAL_LINKS } from "@/lib/site-content";

const quickLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Contact", href: "/contact/" },
  { label: "Careers", href: "/contact/" }
];

const aboutLinks = [
  { label: "Parktek Innovation Private Limited", href: "/#solutions" },
  { label: "Join the Parktek Team", href: "/contact/" }
];

const socialLinks = [
  { alt: "X", href: "https://x.com", icon: "/figma/footer/social-x.svg" },
  {
    alt: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/figma/footer/social-linkedin.svg"
  },
  {
    alt: "YouTube",
    href: "https://youtube.com",
    icon: "/figma/footer/social-youtube.svg"
  }
];

export function Footer({ className = "", forceDesktop = false }) {
  return (
    <footer className={className}>
      <div className="rounded-[36px] border border-white/20 bg-black p-6 text-white md:p-[24px]">
        <div className="rounded-[36px] border border-white/20 px-6 py-10 md:px-[73.2px] md:py-[73.2px]">
          <div
            className={
              forceDesktop
                ? "grid grid-cols-[281px_474px_1fr] gap-12"
                : "grid gap-12 xl:grid-cols-[281px_474px_1fr]"
            }
          >
            <div className="space-y-4">
              <h3 className="font-clash text-[28px] text-[#424547]">Quick Links</h3>
              <div className="space-y-[10px] text-[19.2px] leading-[28.8px]">
                {quickLinks.map((link) => (
                  <Link
                    className="block transition-opacity hover:opacity-70"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-clash text-[28px] text-[#424547]">About Parktek</h3>
              <div className="space-y-[14.4px] text-[19.2px] leading-[28.8px]">
                <Link className="block transition-opacity hover:opacity-70" href={aboutLinks[0].href}>
                  {aboutLinks[0].label}
                </Link>
                <Link className="inline-flex items-center gap-2 transition-opacity hover:opacity-70" href={aboutLinks[1].href}>
                  <span>{aboutLinks[1].label}</span>
                  <img alt="" className="size-[19.2px]" src="/figma/footer/external.svg" />
                </Link>
              </div>
            </div>

            <div className="space-y-3 leading-[37.8px]">
              <h3 className="font-clash text-[28px] text-[#424547]">Contact Us</h3>
              <p className="text-[19.2px]">For any inquiries, reach out to us at:</p>
              <div className="space-y-1 text-[19.2px]">
                <p>Email: {CONTACT_DETAILS.email}</p>
                <p>Phone: {CONTACT_DETAILS.phone}</p>
                <p>Address: {CONTACT_DETAILS.address}</p>
              </div>
            </div>
          </div>

          <div
            className={
              forceDesktop
                ? "mt-16 flex items-center justify-between gap-8"
                : "mt-16 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between"
            }
          >
            <div className={forceDesktop ? "flex items-center gap-6" : "flex flex-col gap-6 xl:flex-row xl:items-center"}>
              <div className="relative h-14 w-[158px] overflow-hidden">
                <img
                  alt="ParkTek"
                  className="absolute left-[-25.83%] top-[-82.97%] h-[281.32%] w-[149.13%] max-w-none"
                  height="56"
                  src="/figma/footer/logo.png"
                  width="158"
                />
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    className="inline-flex size-[38.4px] items-center justify-center rounded-full bg-[#333]"
                    href={link.href}
                    key={link.alt}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img alt={link.alt} className="size-[19.2px]" src={link.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div
              className={
                forceDesktop
                  ? "flex items-center justify-end gap-4"
                  : "flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-end"
              }
            >
              <div className={forceDesktop ? "flex gap-10 text-[19.2px]" : "flex flex-wrap gap-6 text-[19.2px] xl:gap-10"}>
                {LEGAL_LINKS.map((link) => (
                  <Link className="transition-opacity hover:opacity-70" href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <p className={forceDesktop ? "text-[19.2px] text-[#999] whitespace-nowrap" : "text-[19.2px] text-[#999]"}>
                © 2025 ParkTek. All rights reserved. Crafted with heart to Simplify Your Parking
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
