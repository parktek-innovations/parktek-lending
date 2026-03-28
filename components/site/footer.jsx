import Link from "next/link";

import { CONTACT_DETAILS, LEGAL_LINKS } from "@/lib/site-content";

const quickLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Contact", href: "/contact/" },
  { label: "Careers", href: "/contact/" }
];

const aboutLinks = [
  { label: "PARKTEK INNOVATION PRIVATE LIMITED", href: "/#solutions" },
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
      <div className="bg-black p-6 text-white">
        <div
          className={
            forceDesktop
              ? "rounded-[36px] border border-white/20 px-[72px] py-[72px]"
              : "rounded-[36px] border border-white/20 px-6 py-10 md:px-[73.2px] md:py-[73.2px]"
          }
        >
          <div
            className={
              forceDesktop
                ? "flex items-start justify-between gap-12"
                : "grid gap-12 xl:grid-cols-[281px_474px_1fr]"
            }
          >
            <div className="min-w-[117.5px] space-y-[14.4px]">
              <h3 className="font-clash text-[28px] font-medium leading-[28.8px] text-[#424547]">
                Quick Links
              </h3>
              <div className="text-[19.2px] leading-[42px]">
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

            <div className="max-w-[474px] space-y-[14.4px]">
              <h3 className="font-clash text-[28px] font-medium leading-[28.8px] text-[#424547]">
                About Parktek
              </h3>
              <div className="space-y-[14.4px] text-[19.2px] leading-[28.8px]">
                <Link
                  className="block transition-opacity hover:opacity-70"
                  href={aboutLinks[0].href}
                >
                  {aboutLinks[0].label}
                </Link>
                <Link className="block transition-opacity hover:opacity-70" href={aboutLinks[1].href}>
                  {aboutLinks[1].label}
                </Link>
              </div>
            </div>

            <div className="max-w-[390px] leading-[37.8px]">
              <h3 className="font-clash text-[28px] font-medium leading-[37.8px] text-[#424547]">
                Contact Us
              </h3>
              <p className="mt-0 text-[19.2px] leading-[37.8px]">
                For any inquiries, reach out to us at:
                <br />
                <br />
                {`Email: ${CONTACT_DETAILS.email}`}
                <br />
                {`Phone: ${CONTACT_DETAILS.phone}`}
                <br />
                {`Address: ${CONTACT_DETAILS.address}`}
              </p>
            </div>
          </div>

          <div
            className={
              forceDesktop
                ? "mt-[72px] flex items-center justify-between gap-8"
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
                  ? "flex items-center justify-end gap-6"
                  : "flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-end"
              }
            >
              <div
                className={
                  forceDesktop
                    ? "flex gap-10 text-[19.2px] leading-[28.8px]"
                    : "flex flex-wrap gap-6 text-[19.2px] xl:gap-10"
                }
              >
                {LEGAL_LINKS.map((link) => (
                  <Link className="transition-opacity hover:opacity-70" href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <p
                className={
                  forceDesktop
                    ? "whitespace-nowrap text-[19.2px] leading-[28.8px] text-[#999999]"
                    : "text-[19.2px] text-[#999]"
                }
              >
                {"\u00A9 2025 ParkTek. All rights reserved."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
