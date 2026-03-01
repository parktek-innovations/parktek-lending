# ParkTek Front-End Design Guide

## Purpose

Implement the ParkTek lending page in React with Next.js (App Router), Tailwind CSS, and shadcn/ui using a premium enterprise style inspired by the provided screenshot layout pattern.

## Stack and Structure

- Use Next.js App Router sections in `app/page.tsx` (or composable section components under `components/landing/`).
- Use shadcn/ui primitives for buttons, cards, badges, accordion, and separators.
- Use Tailwind utility classes for layout, spacing, and responsive behavior.
- Keep design system tokens centralized in `app/globals.css` and `tailwind.config.ts`.

## Screenshot-Inspired Layout Pattern

Apply this visual rhythm from top to bottom:

1. Compact top navigation with primary CTA on the right.
2. Hero with strong headline, supporting copy, and illustration/media on the right.
3. Sector/solution tile grid block.
4. System components block on muted surface with card tiles.
5. Mid-page visual banner/illustration strip.
6. Supporting proof/info sections (capabilities, testimonials/proof placeholders, logos/partners if real).
7. Content/news/resources card grid.
8. Multi-column footer with clear links and contact.

Do not replicate third-party branding or exact artwork. Mirror only structure, density, and section progression.

## Responsive Breakpoints and Behavior

Use three target ranges:

- Mobile: `<768px` (`default` and `sm`)
- Tablet: `768px-1023px` (`md`)
- Desktop: `>=1024px` (`lg`, `xl`, `2xl`)

### Mobile Rules

- Single-column layout for all major sections.
- Hero order: text first, media second.
- Card grids collapse to one card per row.
- Section vertical spacing: `py-12` to `py-14`.
- Container padding: `px-4`/`px-5`.
- Nav uses compact menu + one visible primary CTA if space allows.

### Tablet Rules

- Two-column layouts where meaningful (hero, split sections).
- Card grids at 2 columns for solution/capability tiles.
- Section vertical spacing: `py-14` to `py-16`.
- Container padding: `px-6`.

### Desktop Rules

- Hero and major content blocks in 12-column grid patterns.
- Card grids at 3-4 columns depending on section density.
- Section vertical spacing: `py-20` to `py-24`.
- Container max width: `max-w-7xl` (or `max-w-[1200px]`) centered.
- Keep composition breathable: avoid crowded dense blocks.

## Color Palette

### Core Neutrals

- background: `#FFFFFF`
- surface (cards/sections): `#F8FAFC`
- text_primary: `#0B0F14`
- text_muted: `#475569`
- border: `#E2E8F0`
- muted_bg: `#F1F5F9`

### Primary Accent

- primary: `#1D4ED8`
- primary_hover: `#1E40AF`
- primary_subtle_bg: `#EFF6FF`
- primary_subtle_border: `#BFDBFE`

### Status Colors

- success: `#16A34A`
- warning: `#F59E0B`
- danger: `#DC2626`
- info: `#0EA5E9`

### Optional Secondary Accent

- teal_highlight: `#06B6D4`
- teal_subtle_bg: `#ECFEFF`

## shadcn/ui Variables (Light Mode)

Add under `:root` in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 220 30% 6%;

  --card: 210 40% 98%;
  --card-foreground: 220 30% 6%;

  --muted: 210 40% 96%;
  --muted-foreground: 215 20% 34%;

  --border: 214 32% 91%;
  --input: 214 32% 91%;

  --primary: 221 83% 53%;
  --primary-foreground: 0 0% 100%;
  --ring: 221 83% 53%;

  --secondary: 220 30% 6%;
  --secondary-foreground: 0 0% 100%;

  --accent: 214 100% 97%;
  --accent-foreground: 220 30% 6%;

  --destructive: 0 72% 51%;
  --destructive-foreground: 0 0% 100%;
}
```

## Optional Tailwind Semantic Tokens

Add in `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      brand: {
        DEFAULT: "#1D4ED8",
        hover: "#1E40AF",
        soft: "#EFF6FF",
        softBorder: "#BFDBFE",
      },
      ink: {
        DEFAULT: "#0B0F14",
        muted: "#475569",
      },
      surface: {
        DEFAULT: "#FFFFFF",
        card: "#F8FAFC",
        muted: "#F1F5F9",
      },
      line: {
        DEFAULT: "#E2E8F0",
      },
    },
  },
}
```

## Hard Constraints

- Use only one loud accent for primary actions: `#1D4ED8`.
- Keep 80-90% of the interface in neutral colors.
- Reserve teal for tiny highlights only (badges/charts), never primary CTAs.
- Use outcome-first content and avoid hype language.
- Keep proofs truthful; keep placeholders when data is unavailable.

## Component Guidance (shadcn/ui)

- Primary CTA: `Button` default variant with primary color.
- Secondary CTA: outline/ghost style with neutral border.
- Section cards: `Card` with soft border and minimal shadow.
- FAQ: `Accordion`.
- Metrics strip: compact cards or inline stat blocks.
- Avoid heavy gradients and avoid dark mode unless explicitly requested.
