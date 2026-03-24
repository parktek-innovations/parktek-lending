import Link from "next/link";

import { DesktopHeroStage } from "@/components/home/desktop-hero-stage";
import { FaqSection } from "@/components/site/faq-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";
import { RoadArt } from "@/components/home/road-art";

const heroPills = [
  {
    icon: "/figma/hero/cctv.svg",
    label: "AI-Powered ANPR",
    width: "264px"
  },
  {
    icon: "/figma/hero/car-tag.svg",
    label: "Smart Registration",
    width: "271px"
  },
  {
    icon: "/figma/hero/fleet.svg",
    label: "Fleet & Valet Ready",
    width: "280px"
  }
];

const viaCards = [
  {
    icon: "/figma/via/anpr.svg",
    title: "AI-Powered ANPR",
    copy:
      "Utilize advanced license plate recognition for frictionless entry and exit, eliminating bottlenecks and securing access points instantly.",
    width: "326px"
  },
  {
    icon: "/figma/via/lock.svg",
    title: "Centralized List Tagging",
    copy:
      "Manage authorized vehicles effortlessly with our smart registration system, offering real-time tracking and automated compliance for all users.",
    width: "394px"
  },
  {
    icon: "/figma/via/valet.svg",
    title: "Unified Valet & Fleet",
    copy:
      "Streamline professional valet services and fleet sharing ecosystems from a single, intuitive dashboard to optimize your on-site resources.",
    width: "333px"
  }
];

const paymentPoints = [
  "High-accuracy ANPR entry",
  "Seamless vehicle movement",
  "Contactless digital payments",
  "Contactless digital payments"
];

function HeroCopy() {
  return (
    <div className="w-[1016px] px-[50px]">
      <p className="font-clash text-[17.877px] uppercase tracking-[1.7877px] text-parktek-ink">
        ⬡ SMART PARKING ECOSYSTEM · UNIFIED ACCESS CONTROL
      </p>

      <div className="mt-[40px] w-[916px] text-parktek-ink">
        <p className="font-clash text-[84px] font-medium leading-[89.384px]">
          Connecting &amp;
          <br />
          Securing
        </p>
        <p className="font-montserrat text-[72px] font-normal leading-[89.384px]">
          Every Vehicle.
        </p>
      </div>

      <p className="mt-[40px] w-[948px] text-[26.815px] leading-[38px] text-parktek-muted">
        A comprehensive smart parking ecosystem integrating AI-powered ANPR, smart registration,
        and professional fleet management into one seamless platform.
      </p>

      <div className="mt-[40px] flex items-center gap-[20px]">
        {heroPills.map((pill) => (
          <div
            className="flex h-[54px] items-center gap-[10px] rounded-[14895.871px] bg-white px-[20px] py-[12px]"
            key={pill.label}
            style={{ width: pill.width }}
          >
            <img alt="" className="size-6" src={pill.icon} />
            <span className="text-[20.856px] leading-[29.795px] text-parktek-ink">{pill.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-[40px] flex items-center gap-[40px]">
        <Button
          asChild
          className="h-[67.795px] rounded-[11.918px] px-[35px] text-[20.856px] font-normal"
          size="lg"
        >
          <Link href="#solutions">
            Explore Ecosystem
            <span className="ml-[26px] inline-block text-[29.795px] leading-[29.795px]">→</span>
          </Link>
        </Button>
        <Button
          asChild
          className="h-[65px] rounded-[11.918px] border-[1.49px] px-[36px] text-[20.856px] font-normal"
          size="lg"
          variant="outline"
        >
          <Link href="/contact/">Book a Demo</Link>
        </Button>
      </div>
    </div>
  );
}

function ViaSection({ mobile = false }) {
  if (mobile) {
    return (
      <section className="space-y-10" id="solutions">
        <div className="text-center">
          <p className="font-clash text-[42px] font-medium leading-[1] text-parktek-ink">Via Parktek</p>
          <p className="mx-auto mt-4 max-w-[14ch] text-[34px] font-semibold leading-[1.08] text-parktek-yellow">
            Expand operational efficiency and secure your premises
          </p>
        </div>

        <div className="grid gap-6">
          {viaCards.map((card) => (
            <div
              className="rounded-[32px] bg-white px-6 py-8 text-center shadow-card"
              key={card.title}
            >
              <img alt="" className="mx-auto h-[71px] w-auto" src={card.icon} />
              <h3 className="mt-6 font-clash text-[28px] leading-[1.1] text-black">{card.title}</h3>
              <p className="mt-4 text-[20px] leading-[1.35] text-[#767676]">{card.copy}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-[1325px]" id="solutions">
      <div className="mx-auto flex w-[882px] flex-col items-center text-center">
        <p className="font-clash text-[60px] font-medium leading-[89.384px] text-parktek-ink">
          Via Parktek
        </p>
        <p className="text-[52px] font-semibold leading-[1.05] text-parktek-yellow">
          Expand operational efficiency and secure your premises
        </p>
      </div>

      <div className="mt-[80px] flex items-center gap-[68px]">
        {viaCards.map((card, index) => (
          <div className="flex items-center gap-[68px]" key={card.title}>
            <div
              className="flex flex-col items-center gap-6 text-center"
              style={{ width: card.width }}
            >
              <img alt="" className="h-[71px] w-auto" src={card.icon} />
              <h3 className="font-clash text-[32px] leading-[1.2] text-black">{card.title}</h3>
              <p className="text-[24px] leading-[1.25] text-[#767676]">{card.copy}</p>
            </div>
            {index < viaCards.length - 1 ? (
              <img alt="" className="h-[256px] w-px shrink-0" src="/figma/via/divider.svg" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function PaymentSection({ mobile = false }) {
  if (mobile) {
    return (
      <section className="overflow-hidden rounded-[32px] bg-white shadow-card" id="features">
        <div className="px-6 py-8">
          <h2 className="max-w-[12ch] font-clash text-[40px] leading-[1.05] text-parktek-yellow">
            License plate recognition and automatic payment upon exit.
          </h2>
          <p className="mt-8 text-[21px] leading-[1.35] text-black">
            ParkTek has successfully integrated with most parking equipment suppliers on the
            market, allowing you to quickly achieve unmanned and cashless payment in a low-cost
            way. This reduces payment congestion during peak hours and makes it convenient for car
            owners to leave directly after picking up their vehicles.
          </p>

          <div className="mt-8 space-y-5">
            {paymentPoints.map((point, index) => (
              <div className="flex items-center gap-4" key={`${point}-${index}`}>
                <div className="h-px w-5 bg-parktek-yellow" />
                {index === 0 ? (
                  <div className="flex h-[46.4px] flex-1 items-center justify-between rounded-[30px] bg-[#f7f7f7] px-[10px]">
                    <span className="text-[18px] leading-[23px] text-black">{point}</span>
                    <img alt="" className="size-[26.4px]" src="/figma/payment/check.svg" />
                  </div>
                ) : (
                  <span className="text-[18px] leading-[23px] text-black">{point}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#121100] p-8">
          <img
            alt="Vehicle payment illustration"
            className="mx-auto w-full max-w-[330px]"
            src="/figma/payment/illustration.svg"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-[40px] bg-white shadow-card" id="features">
      <div className="grid h-[743px] w-[1237.333px] grid-cols-[742px_495.333px]">
        <div className="relative pl-[30px] pr-[84px] pt-[74px]">
          <h2 className="w-[687px] font-clash text-[48px] font-medium leading-[1.22] text-parktek-yellow">
            License plate recognition and automatic payment upon exit.
          </h2>

          <p className="mt-[55px] w-[622px] text-[24px] leading-[1.28] text-black">
            ParkTek has successfully integrated with most parking equipment suppliers on the
            market, allowing you to quickly achieve unmanned and cashless payment in a low-cost
            way. This reduces payment congestion during peak hours and makes it convenient for car
            owners to leave directly after picking up their vehicles.
          </p>

          <div className="mt-[62px] space-y-[17px]">
            <div className="flex items-center gap-[13px]">
              <img alt="" className="h-px w-5 shrink-0" src="/figma/payment/line-short.svg" />
              <div className="flex h-[46.4px] w-[599.4px] items-center justify-between rounded-[30px] bg-[#f7f7f7] px-[10px]">
                <span className="text-[19px] leading-[normal] text-black">
                  High-accuracy ANPR entry
                </span>
                <img alt="" className="size-[26.4px]" src="/figma/payment/check.svg" />
              </div>
            </div>

            {paymentPoints.slice(1).map((point, index) => (
              <div className="flex items-center gap-[22px]" key={`${point}-${index}`}>
                <img alt="" className="h-px w-5 shrink-0" src="/figma/payment/line-short.svg" />
                <span className="text-[19px] leading-[normal] text-black">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-full items-center justify-center bg-[#121100]">
          <img
            alt="Vehicle payment illustration"
            className="h-[743px] w-[495.333px]"
            src="/figma/payment/illustration.svg"
          />
        </div>
      </div>
    </section>
  );
}

function JoinSection({ mobile = false }) {
  if (mobile) {
    return (
      <section className="rounded-[32px] bg-white p-6 shadow-card" id="about">
        <p className="font-clash text-[40px] leading-[0.9] text-parktek-yellow">Join us</p>
        <h2 className="mt-4 text-[34px] leading-[1.15] text-[#111]">
          Partner with leading infrastructure providers and join forces with ParkTek to redefine
          the parking experience!
        </h2>
        <p className="mt-6 text-[22px] leading-[1.45] text-[#111]">
          For various parking lot operation needs, from automated boom barriers and ANPR license
          plate recognition to FASTag and QR code payment integration, we deliver the most
          scalable and secure smart parking strategy.
        </p>
        <Button
          asChild
          className="mt-8 h-[59px] rounded-[36px] border-[3.6px] border-parktek-yellow bg-transparent px-[27.6px] text-[19.2px] font-normal text-parktek-yellow hover:bg-parktek-yellow/10"
          variant="ghost"
        >
          <Link href="/contact/">
            Become a ParkTek Partner
            <img alt="" className="ml-2 size-[19.2px]" src="/figma/join/arrow.svg" />
          </Link>
        </Button>

        <div className="relative mt-10 flex h-[280px] items-center justify-center overflow-hidden rounded-[44px] bg-[rgba(218,207,0,0.06)]">
          <img alt="" className="absolute size-[240px]" src="/figma/join/rings.svg" />
          <div className="flex size-[178px] items-center justify-center rounded-full bg-parktek-yellow">
            <img alt="" className="h-[110px] w-auto" src="/figma/join/pin.svg" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex w-[1237px] items-center justify-center gap-[48px] rounded-[40px] bg-white p-[40px] shadow-card" id="about">
      <div className="relative h-[479.64px] w-[642.108px]">
        <p className="font-clash text-[48px] leading-[43.2px] text-parktek-yellow">Join us</p>
        <h2 className="mt-[17px] text-[32px] leading-[1.22] text-[#111]">
          Partner with leading infrastructure providers and join forces with ParkTek to redefine
          the parking experience!
        </h2>
        <p className="mt-[78px] text-[24px] leading-[36px] text-[#111]">
          For various parking lot operation needs, from automated boom barriers and ANPR license
          plate recognition to FASTag and QR code payment integration, we deliver the most
          scalable and secure smart parking strategy.
        </p>
        <Button
          asChild
          className="mt-[40px] h-[59px] rounded-[36px] border-[3.6px] border-parktek-yellow bg-transparent px-[27.6px] text-[19.2px] font-normal text-parktek-yellow hover:bg-parktek-yellow/10"
          variant="ghost"
        >
          <Link href="/contact/">
            Become a ParkTek Partner
            <img alt="" className="ml-[4.8px] size-[19.2px]" src="/figma/join/arrow.svg" />
          </Link>
        </Button>
      </div>

      <div className="relative flex size-[444px] items-center justify-center rounded-[222px] bg-[rgba(218,207,0,0.06)]">
        <img alt="" className="absolute size-[360px]" src="/figma/join/rings.svg" />
        <div className="flex size-[276px] items-center justify-center rounded-full bg-parktek-yellow">
          <img alt="" className="h-[157.676px] w-[115px]" src="/figma/join/pin.svg" />
        </div>
      </div>
    </section>
  );
}

function DesktopHome() {
  return (
    <div className="hidden min-[1440px]:block bg-[#e6e6e6] px-6 pb-8 pt-6">
      <main className="mx-auto max-w-[1776px]">
        <section className="overflow-hidden rounded-[48px] bg-parktek-cream" id="home">
          <DesktopHeroStage
            art={<RoadArt className="left-0 top-[118px] h-[2160px] w-[1728px]" />}
            copy={<HeroCopy />}
            header={<Header forceDesktop />}
            via={<ViaSection />}
          />
        </section>

        <div className="mx-auto mt-[169px] w-full max-w-[1237.333px]">
          <PaymentSection />
        </div>

        <div className="mx-auto mt-[290px] w-full max-w-[1237px]">
          <JoinSection />
        </div>

        <div className="mx-auto mt-[290px] w-full max-w-[1237px]">
          <FaqSection />
        </div>

        <Footer className="mt-[104px]" forceDesktop />
      </main>
    </div>
  );
}

function TabletHome() {
  return (
    <div className="hidden md:block min-[1440px]:hidden">
      <main className="mx-auto max-w-[1100px] px-6 pb-6 pt-6">
        <Header compact />

        <section
          className="relative mt-6 overflow-hidden rounded-[40px] bg-white px-8 py-10 shadow-card"
          id="home"
        >
          <div className="absolute right-[-120px] top-[-40px] size-[340px] rounded-full bg-[radial-gradient(circle,_rgba(218,207,0,0.18)_0%,_rgba(218,207,0,0)_72%)]" />
          <p className="font-clash text-[15px] uppercase tracking-[0.16em] text-parktek-ink">
            ⬡ SMART PARKING ECOSYSTEM · UNIFIED ACCESS CONTROL
          </p>
          <div className="mt-8 max-w-[760px] text-parktek-ink">
            <p className="font-clash text-[72px] font-medium leading-[0.96]">Connecting &amp;</p>
            <p className="font-clash text-[72px] font-medium leading-[0.96]">Securing</p>
            <p className="mt-1 text-[64px] leading-[0.96]">Every Vehicle.</p>
          </div>
          <p className="mt-8 max-w-[820px] text-[28px] leading-[1.34] text-parktek-muted">
            A comprehensive smart parking ecosystem integrating AI-powered ANPR, smart
            registration, and professional fleet management into one seamless platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {heroPills.map((pill) => (
              <div
                className="flex items-center gap-2 rounded-full bg-[#fafaf7] px-5 py-3"
                key={pill.label}
              >
                <img alt="" className="size-5" src={pill.icon} />
                <span className="text-[18px] text-parktek-ink">{pill.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="h-16 rounded-[18px] px-7 text-lg">
              <Link href="#solutions">
                Explore Ecosystem
                <span className="ml-3 text-xl">→</span>
              </Link>
            </Button>
            <Button asChild className="h-16 rounded-[18px] px-7 text-lg" variant="outline">
              <Link href="/contact/">Book a Demo</Link>
            </Button>
          </div>
        </section>

        <div className="mt-12">
          <ViaSection mobile />
        </div>

        <div className="mt-12">
          <PaymentSection mobile />
        </div>

        <div className="mt-12">
          <JoinSection mobile />
        </div>

        <FaqSection className="mt-12 rounded-[32px] p-8 md:p-10" />

        <Footer className="mt-12" />
      </main>
    </div>
  );
}

function MobileHome() {
  return (
    <div className="md:hidden">
      <main className="mx-auto max-w-[768px] px-4 pb-4 pt-4 sm:px-6">
        <Header />

        <section className="relative mt-5 overflow-hidden rounded-[36px] bg-white px-6 py-8 shadow-card" id="home">
          <div className="absolute right-[-62px] top-[28px] size-[220px] rounded-full bg-[radial-gradient(circle,_rgba(218,207,0,0.16)_0%,_rgba(218,207,0,0)_72%)]" />
          <p className="font-clash text-[13px] uppercase tracking-[0.14em] text-parktek-ink">
            ⬡ SMART PARKING ECOSYSTEM · UNIFIED ACCESS CONTROL
          </p>
          <div className="mt-6 text-parktek-ink">
            <p className="font-clash text-[52px] font-medium leading-[0.96]">Connecting &amp;</p>
            <p className="font-clash text-[52px] font-medium leading-[0.96]">Securing</p>
            <p className="mt-1 text-[50px] leading-[0.96]">Every Vehicle.</p>
          </div>
          <p className="mt-6 text-[21px] leading-[1.35] text-parktek-muted">
            A comprehensive smart parking ecosystem integrating AI-powered ANPR, smart
            registration, and professional fleet management into one seamless platform.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {heroPills.map((pill) => (
              <div
                className="flex items-center gap-2 rounded-full bg-[#fafaf7] px-4 py-3"
                key={pill.label}
              >
                <img alt="" className="size-5" src={pill.icon} />
                <span className="text-[16px] text-parktek-ink">{pill.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-14 rounded-[16px] text-base">
              <Link href="#solutions">
                Explore Ecosystem
                <span className="ml-3 text-lg">→</span>
              </Link>
            </Button>
            <Button asChild className="h-14 rounded-[16px] text-base" variant="outline">
              <Link href="/contact/">Book a Demo</Link>
            </Button>
          </div>
        </section>

        <div className="mt-10">
          <ViaSection mobile />
        </div>

        <div className="mt-10">
          <PaymentSection mobile />
        </div>

        <div className="mt-10">
          <JoinSection mobile />
        </div>

        <FaqSection className="mt-10 rounded-[32px] p-6 md:p-8" />

        <Footer className="mt-10" />
      </main>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <DesktopHome />
      <TabletHome />
      <MobileHome />
    </>
  );
}
