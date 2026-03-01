import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Camera,
  CarFront,
  CheckCircle2,
  Cpu,
  House,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  ShoppingBag,
  TicketCheck,
} from "lucide-react";

import spec from "@/skills/parktek-landing-content/references/parktek-landing-content-spec.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const sections = Object.fromEntries(spec.content_ia.sections.map((section) => [section.id, section]));
const navItems = spec.content_ia.navigation.items;

const solutionMedia = {
  solutions_enterprise_campus: "/media/entry-day-night.png",
  solutions_residential: "/media/garage-grid.png",
  solutions_retail_mixed_use: "/media/real-installation.jpg",
};

const capabilityIcons = [
  Camera,
  TicketCheck,
  CarFront,
  Building2,
  BarChart3,
  Shield,
  Cpu,
  House,
];

const resourceCards = [
  {
    title: "Operational Readiness Checklist",
    copy: "Gate-by-gate launch checklist for hardware, policy, and monitoring handover.",
    image: "/media/gate-illustration.png",
  },
  {
    title: "Peak Throughput Playbook",
    copy: "Queue reduction practices for office exits, events, and mixed-use peak periods.",
    image: "/media/entry-day-night.png",
  },
  {
    title: "Audit and Compliance Brief",
    copy: "How to structure audit trails, exception logs, and billing reconciliation controls.",
    image: "/media/garage-collage.png",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section id="hero" className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 hero-surface" />
        <div className="absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

        <div className="container grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-20">
          <div className="space-y-7 lg:col-span-5 lg:pr-4">
            <Badge variant="soft" className="w-fit rounded-full px-3 py-1">
              {spec.content_ia.navigation.microcopy}
            </Badge>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold leading-tight text-ink md:text-5xl lg:text-6xl">
                {sections.hero.headline}
              </h1>
              <p className="text-base leading-relaxed text-ink-muted md:text-lg">{sections.hero.subhead}</p>
            </div>

            <ul className="space-y-2.5 text-sm text-ink-muted md:text-base">
              {sections.hero.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button size="lg">{sections.hero.ctas[0].label}</Button>
              <Link href="#solutions" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                {sections.hero.ctas[1].label}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-line bg-slate-950 shadow-panel">
              <video
                className="h-[280px] w-full object-cover md:h-[360px] lg:h-[420px]"
                src="/media/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <Badge className="bg-white/95 text-ink">Live Access Flow</Badge>
                <Badge className="bg-white/95 text-ink">Entry + Exit Automation</Badge>
                <Badge className="bg-white/95 text-ink">Realtime Visibility</Badge>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <MediaTile src="/media/entry-day-night.png" alt="ParkTek gate operations day and night" />
              <MediaTile src="/media/garage-collage.png" alt="ParkTek garage operations collage" />
            </div>
          </div>
        </div>
      </section>

      <section id="proof_metrics" className="border-b border-border bg-white py-10 md:py-12">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sections.proof_metrics.metrics.map((metric) => (
              <Card key={metric.label} className="rounded-xl bg-surface-card">
                <CardHeader className="space-y-1 pb-3">
                  <CardTitle className="text-3xl text-primary">{metric.value}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-ink">{metric.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="border-b border-border bg-white py-14 md:py-16 lg:py-20">
        <div className="container space-y-10">
          <SectionHeading
            badge="Solutions"
            title={sections.solutions.headline}
            intro={sections.solutions.intro}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {sections.solutions.cards.map((card) => (
              <Card key={card.id} className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-panel">
                <MediaTile src={solutionMedia[card.id]} alt={card.label} className="rounded-none border-0" ratio="aspect-[4/3]" />
                <CardHeader className="space-y-3 pb-2">
                  <CardTitle className="text-xl leading-tight">{card.label}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-ink-muted">{card.copy}</CardDescription>
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-5">
                  <ul className="space-y-2.5 text-sm text-ink-muted">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className={cn(buttonVariants({ variant: "outline" }), "mt-auto w-fit")}>
                    {card.cta.label}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="system" className="border-b border-border bg-white py-14 md:py-16 lg:py-20">
        <div className="container grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-5 lg:pr-6">
            <SectionHeading badge="System" title={sections.system.headline} intro={sections.system.subhead} />

            <Card className="rounded-2xl border border-line bg-white">
              <CardHeader>
                <CardTitle>{sections.system.primary_block.label}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-ink-muted">
                {sections.system.primary_block.key_points.map((point) => (
                  <p key={point} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </p>
                ))}
                <p className="pt-1 text-xs uppercase tracking-[0.12em] text-ink-muted/80">{sections.system.secondary_note}</p>
              </CardContent>
            </Card>

            <Link href="#contact" className={cn(buttonVariants({ size: "lg" }), "w-fit")}>
              {sections.system.cta.label}
            </Link>
          </div>

          <div className="space-y-4 lg:col-span-7">
            <MediaTile src="/media/garage-grid.png" alt="ParkTek multi-level parking operations" ratio="aspect-[16/10]" />
            <div className="grid gap-4 sm:grid-cols-2">
              {sections.system.component_tiles.map((item, index) => (
                <Card key={item.label} className="rounded-xl border border-line bg-white">
                  <CardHeader className="space-y-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft">
                      {index % 4 === 0 && <Camera className="h-4 w-4 text-primary" />}
                      {index % 4 === 1 && <Shield className="h-4 w-4 text-primary" />}
                      {index % 4 === 2 && <TicketCheck className="h-4 w-4 text-primary" />}
                      {index % 4 === 3 && <Cpu className="h-4 w-4 text-primary" />}
                    </div>
                    <CardTitle className="text-base">{item.label}</CardTitle>
                    <CardDescription className="text-sm text-ink-muted">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why_parktek" className="border-b border-border bg-white py-14 md:py-16 lg:py-20">
        <div className="container grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-7 lg:pr-8">
            <SectionHeading badge="Why ParkTek" title={sections.why_parktek.headline} intro={sections.why_parktek.intro} />
            <div className="grid gap-3 sm:grid-cols-2">
              {sections.why_parktek.outcome_bullets.map((point) => (
                <div key={point} className="rounded-lg border border-line bg-surface-card px-4 py-3 text-sm text-ink-muted">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-5">
            <MediaTile src="/media/gate-illustration.png" alt="ParkTek access control and gate equipment" ratio="aspect-[4/3]" />
            <MediaTile src="/media/real-installation.jpg" alt="ParkTek installation in real parking site" ratio="aspect-[16/10]" />
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-b border-border bg-white py-14 md:py-16 lg:py-20">
        <div className="container space-y-10">
          <SectionHeading badge="Capabilities" title={sections.capabilities.headline} />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sections.capabilities.items.map((item, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length];
              return (
                <Card key={item.id} className="rounded-xl border border-line bg-surface-card">
                  <CardHeader className="space-y-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-base">{item.label}</CardTitle>
                    <CardDescription className="text-sm text-ink-muted">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how_it_works" className="border-b border-border bg-white py-14 md:py-16 lg:py-20">
        <div className="container grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6 lg:pr-8">
            <SectionHeading badge="How It Works" title={sections.how_it_works.headline} />
            <div className="space-y-4">
              {sections.how_it_works.steps.map((step) => (
                <Card key={step.step} className="rounded-xl border border-line bg-white">
                  <CardHeader>
                    <CardTitle className="text-base">
                      {step.step}. {step.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-ink-muted">{step.detail}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:col-span-6">
            <MediaTile src="/media/entry-day-night.png" alt="ParkTek deployment and operations view" ratio="aspect-[16/10]" />
            <Card className="rounded-xl border border-line bg-white">
              <CardHeader>
                <CardTitle>{sections.how_it_works.support_model.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5 text-sm text-ink-muted">
                  {sections.how_it_works.support_model.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="case_studies" className="border-b border-border bg-white py-14 md:py-16 lg:py-20">
        <div className="container space-y-10">
          <SectionHeading badge="Case Studies" title={sections.case_studies.headline} intro={sections.case_studies.intro} />

          <div className="grid gap-5 lg:grid-cols-3">
            {sections.case_studies.cards.map((card, idx) => (
              <Card key={card.id} className="overflow-hidden rounded-2xl border border-line bg-white">
                <MediaTile
                  src={idx % 3 === 0 ? "/media/garage-collage.png" : idx % 3 === 1 ? "/media/garage-grid.png" : "/media/real-installation.jpg"}
                  alt={card.title}
                  ratio="aspect-[4/3]"
                  className="rounded-none border-0"
                />
                <CardHeader className="space-y-3">
                  <Badge variant="secondary" className="w-fit">
                    Metric Placeholder
                  </Badge>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription className="text-sm text-ink-muted">{card.notes}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="border-b border-border bg-white py-14 md:py-16 lg:py-20">
        <div className="container space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading badge="Resources" title="Operator guides and implementation notes" />
            <Link href="#contact" className={cn(buttonVariants({ variant: "outline" }))}>
              Talk to an expert
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resourceCards.map((resource) => (
              <Card key={resource.title} className="overflow-hidden rounded-2xl border border-line bg-white">
                <MediaTile src={resource.image} alt={resource.title} className="rounded-none border-0" ratio="aspect-[4/3]" />
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="text-sm text-ink-muted">{resource.copy}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-b border-border bg-white py-14 md:py-16 lg:py-20">
        <div className="container grid gap-8 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-4">
            <SectionHeading badge="FAQ" title={sections.faq.headline} />
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {sections.faq.items.map((faq, idx) => (
                <AccordionItem value={`faq-${idx + 1}`} key={faq.q}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-primary py-14 md:py-16 lg:py-20">
        <div className="container grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="space-y-3 lg:col-span-8">
            <h2 className="text-balance text-3xl font-semibold text-primary-foreground md:text-4xl">{sections.final_cta.headline}</h2>
            <p className="text-base text-blue-100 md:text-lg">{sections.final_cta.subhead}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <button className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "bg-white text-ink hover:bg-blue-50")}>
              {sections.final_cta.ctas[0].label}
            </button>
            <button
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-blue-200 bg-transparent text-white hover:bg-blue-700"
              )}
            >
              {sections.final_cta.ctas[1].label}
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-14 md:py-16 lg:py-20">
        <div className="container grid gap-8 lg:grid-cols-12">
          <Card className="rounded-2xl border border-line bg-white lg:col-span-7">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>
                Share your site layout, traffic profile, and policy model. We will map ParkTek to your operating context.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="font-medium text-ink">Name</span>
                <input className="h-10 w-full rounded-md border border-input px-3 text-sm" placeholder="Your name" />
              </label>
              <label className="space-y-2 text-sm">
                <span className="font-medium text-ink">Work email</span>
                <input className="h-10 w-full rounded-md border border-input px-3 text-sm" placeholder="name@company.com" />
              </label>
              <label className="space-y-2 text-sm md:col-span-2">
                <span className="font-medium text-ink">Site details</span>
                <textarea
                  rows={5}
                  className="w-full rounded-md border border-input px-3 py-2 text-sm"
                  placeholder="Entries/exits, expected volume, policy and support needs"
                />
              </label>
              <div className="md:col-span-2">
                <Button size="lg">Schedule a demo</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-line bg-surface-card lg:col-span-5">
            <CardHeader>
              <CardTitle>Contact details placeholder</CardTitle>
              <CardDescription>Replace with real and current ParkTek contact details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-ink-muted">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                Company email placeholder
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                Phone placeholder
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                Address placeholder
              </p>
              <Separator />
              <MediaTile src="/media/real-installation.jpg" alt="ParkTek installation visual" ratio="aspect-[16/10]" />
            </CardContent>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="#hero" className="flex items-center gap-2">
          <Image src="/media/logo-parktek3.png" alt="ParkTek" width={180} height={120} className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link key={item.id} href={`#${item.id}`} className="text-sm font-medium text-ink-muted transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm">
            {spec.content_ia.navigation.secondary_cta.label}
          </Button>
          <Button size="sm">{spec.content_ia.navigation.primary_cta.label}</Button>
        </div>

        <details className="relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-border bg-white text-ink marker:content-['']">
            <Menu className="h-5 w-5" />
          </summary>
          <div className="absolute right-0 top-12 w-64 rounded-lg border border-border bg-white p-4 shadow-panel">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link key={item.id} href={`#${item.id}`} className="block text-sm font-medium text-ink-muted hover:text-ink">
                  {item.label}
                </Link>
              ))}
              <Separator className="my-2" />
              <Button className="w-full">{spec.content_ia.navigation.primary_cta.label}</Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="container space-y-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-3 lg:col-span-2">
            <Image src="/media/logo-parktek3.png" alt="ParkTek" width={180} height={120} className="h-10 w-auto object-contain" />
            <p className="max-w-sm text-sm text-ink-muted">
              Access control, occupancy visibility, and policy-led parking operations for multi-site environments.
            </p>
          </div>

          {sections.footer.columns.map((column) => (
            <div key={column.title} className="space-y-3">
              <p className="text-sm font-semibold text-ink">{column.title}</p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-sm text-ink-muted hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />
        <div className="flex flex-col gap-3 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright © {new Date().getFullYear()} ParkTek.</p>
          <p>Built with Next.js App Router, Tailwind CSS, and shadcn/ui-compatible components.</p>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ badge, title, intro }) {
  return (
    <div className="space-y-3">
      {badge ? (
        <Badge variant="outline" className="w-fit rounded-full bg-white px-3 py-1">
          {badge}
        </Badge>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-ink md:text-4xl">{title}</h2>
      {intro ? <p className="max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">{intro}</p> : null}
    </div>
  );
}

function MediaTile({ src, alt, ratio = "aspect-[16/10]", className }) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl border border-line bg-muted", ratio, className)}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
