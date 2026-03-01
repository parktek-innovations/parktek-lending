---
name: parktek-landing-content
description: ParkTek lending-page content and design implementation reference for Next.js App Router + Tailwind CSS + shadcn/ui. Use when creating, revising, or mapping landing-page sections, CTA copy, IA, responsive layout (desktop/tablet/mobile), and visual styling for parktek.in.
---

# ParkTek Landing Content

Use this skill to keep landing-page implementation aligned with approved ParkTek messaging, information architecture, and UI design constraints.

## Workflow

1. Read `references/parktek-landing-content-spec.json` before writing landing-page copy.
2. Read `references/parktek-design-guide.md` before writing React/Next.js UI code.
3. Preserve section IDs, CTA IDs, and headline intent unless explicitly asked to change them.
4. Lead with outcomes first, then capabilities.
5. Keep language globally neutral and premium.
6. Do not invent logos, testimonials, or unverifiable metrics.

## Implementation Notes

- Treat this skill as content source of truth for the lending page rewrite.
- If the user provides newer content/copy in future, update the JSON reference first, then implement code changes.
- For UI implementation tasks, map content into Next.js App Router sections with Tailwind + shadcn/ui components.
- Enforce monochrome + signal-blue palette rules and responsive behavior from `references/parktek-design-guide.md`.
