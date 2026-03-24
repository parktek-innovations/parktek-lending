"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/site-content";

function FaqIcon() {
  return (
    <span className="relative inline-flex size-10 items-center justify-center">
      <span className="inline-flex size-10 items-center justify-center rounded-full border border-parktek-yellow group-data-[state=open]:hidden">
        <img alt="" className="size-6" src="/figma/faq/closed.svg" />
      </span>
      <span className="hidden size-10 items-center justify-center rounded-full border border-parktek-yellow bg-parktek-yellow group-data-[state=open]:inline-flex">
        <img alt="" className="size-6" src="/figma/faq/open.svg" />
      </span>
    </span>
  );
}

export function FaqSection({ className = "" }) {
  return (
    <section className={`rounded-[40px] bg-white px-5 py-10 shadow-card md:p-10 ${className}`} id="faq">
      <div className="flex flex-col items-center gap-[14.925px]">
        <span className="rounded-[24px] border border-parktek-yellow px-[12.75px] py-[4.75px] text-center text-base text-parktek-yellow">
          Frequently Asked Questions
        </span>
        <div className="text-center leading-none">
          <p className="font-montserrat text-5xl font-bold text-parktek-ink md:text-[48px] md:leading-[57.6px]">
            Your Questions
          </p>
          <p className="font-clash text-[44px] leading-[43.2px] text-parktek-yellow md:text-[48px]">
            Answered<span className="font-syne">!</span>
          </p>
        </div>
      </div>

      <Accordion
        className="mx-auto mt-12 max-w-[1038px]"
        collapsible
        defaultValue="item-0"
        type="single"
      >
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger icon={<FaqIcon />}>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-8 pr-12 text-[18px] tracking-[0.02em] text-[#525252]">
              {Array.isArray(item.answer) ? (
                <div className="space-y-1 leading-[27px]">
                  <p>We provide comprehensive parking management systems including:</p>
                  <ul className="list-disc pl-7">
                    {item.answer.map((answer) => (
                      <li key={answer}>{answer}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="leading-[27px]">{item.answer}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
