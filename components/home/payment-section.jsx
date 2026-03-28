"use client";

import { useEffect, useState } from "react";

import anprCameraSlide from "@/images/checkin [Vectorized].png";
import vehicleTrackingSlide from "@/images/1441 [Vectorized].png";
import scannerSlide from "@/images/1443 [Vectorized].png";
import { cn } from "@/lib/utils";

const paymentSlides = [
  {
    alt: "License plate recognition illustration",
    label: "High-accuracy ANPR entry",
    src: anprCameraSlide.src
  },
  {
    alt: "Vehicle barrier and exit flow illustration",
    label: "Seamless vehicle movement",
    src: "/figma/payment/illustration.svg"
  },
  {
    alt: "Contactless payment and smart scanning illustration",
    label: "Contactless digital payments",
    src: scannerSlide.src
  },
  {
    alt: "Real-time vehicle location illustration",
    label: "Locate your vehicle",
    src: vehicleTrackingSlide.src
  }
];

function PaymentFeatureList({ activeIndex, mobile = false, onSelect }) {
  return (
    <div className={mobile ? "mt-8 space-y-5" : "mt-[62px] space-y-[17px]"}>
      {paymentSlides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            className={cn(
              "flex items-center",
              mobile ? "gap-4" : "gap-[13px]"
            )}
            key={slide.label}
          >
            <div className="h-px w-5 shrink-0 bg-parktek-yellow" />

            <button
              className={cn(
                "flex w-full items-center justify-between rounded-[30px] text-left transition-all duration-500",
                mobile
                  ? "min-h-[46.4px] px-[10px]"
                  : "min-h-[46.4px] px-[10px]",
                isActive
                  ? "bg-[#f7f7f7] shadow-[0_0_0_1px_rgba(218,207,0,0.08)]"
                  : "bg-transparent hover:bg-[#fafaf7]"
              )}
              onClick={() => onSelect(index)}
              type="button"
            >
              <span
                className={cn(
                  "transition-colors duration-500",
                  mobile ? "text-[18px] leading-[23px]" : "text-[19px] leading-[normal]",
                  isActive ? "text-black" : "text-black/90"
                )}
              >
                {slide.label}
              </span>

              <span
                aria-hidden="true"
                className={cn(
                  "inline-flex shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500",
                  mobile ? "size-[26.4px]" : "size-[26.4px]",
                  isActive
                    ? "border-parktek-yellow text-parktek-yellow opacity-100"
                    : "border-transparent text-transparent opacity-0"
                )}
              >
                <span className="size-2 rounded-full bg-current" />
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}

function PaymentSlideFrame({ activeIndex, className = "", imageClassName = "" }) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-[#121100]", className)}>
      {paymentSlides.map((slide, index) => (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out",
            index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          key={slide.label}
        >
          <img
            alt={slide.alt}
            className={cn("h-full w-full object-contain p-8 md:p-12", imageClassName)}
            src={slide.src}
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/10 px-3 py-2 backdrop-blur-sm">
        {paymentSlides.map((slide, index) => (
          <span
            aria-hidden="true"
            className={cn(
              "h-2 rounded-full transition-all duration-500",
              index === activeIndex ? "w-8 bg-parktek-yellow" : "w-2 bg-white/60"
            )}
            key={slide.label}
          />
        ))}
      </div>
    </div>
  );
}

export function PaymentSection({ mobile = false }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % paymentSlides.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

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

          <PaymentFeatureList activeIndex={activeIndex} mobile onSelect={setActiveIndex} />
        </div>

        <div className="bg-[#121100] p-6 sm:p-8">
          <PaymentSlideFrame
            activeIndex={activeIndex}
            className="mx-auto aspect-[495.333/743] w-full max-w-[330px] rounded-[28px]"
            imageClassName="p-6"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-[40px] bg-white shadow-card" id="features">
      <div className="grid min-h-[743px] w-[1237.333px] grid-cols-[742px_495.333px]">
        <div className="relative px-[30px] pb-[74px] pr-[84px] pt-[74px]">
          <h2 className="w-[687px] font-clash text-[48px] font-medium leading-[1.22] text-parktek-yellow">
            License plate recognition and automatic payment upon exit.
          </h2>

          <p className="mt-[55px] w-[622px] text-[24px] leading-[1.28] text-black">
            ParkTek has successfully integrated with most parking equipment suppliers on the
            market, allowing you to quickly achieve unmanned and cashless payment in a low-cost
            way. This reduces payment congestion during peak hours and makes it convenient for car
            owners to leave directly after picking up their vehicles.
          </p>

          <PaymentFeatureList activeIndex={activeIndex} onSelect={setActiveIndex} />
        </div>

        <div className="bg-[#121100]">
          <PaymentSlideFrame
            activeIndex={activeIndex}
            className="h-full min-h-[743px] w-[495.333px]"
            imageClassName="p-10"
          />
        </div>
      </div>
    </section>
  );
}
