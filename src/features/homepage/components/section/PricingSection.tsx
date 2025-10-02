"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import formatIDR from "@/helpers/formatIDR";
import { cn } from "@/lib/utils";
import { Pricing } from "@/types/index.type";
import parse, { domToReact } from "html-react-parser";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { motion as m } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BgPricing from "../../assets/bg-pricing.webp";

interface Props {
  data: Pricing[];
}

const handleRedirect = (name?: string) => {
  return `https://api.whatsapp.com/send?phone=6285640718857&text=Hallo,%20saya%20ingin%20konsultasi%20lebih%20lanjut%20mengenai%20${
    name ? name : "paket"
  }%20noovio`;
};

const PricingSection = ({ data }: Props) => {
  const { push } = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDisabledLeft, setIsDisabledLeft] = useState(true);
  const [isDisabledRight, setIsDisabledRight] = useState(false);

  const updateDisabledState = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setIsDisabledLeft(scrollLeft <= 0);
    setIsDisabledRight(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  const isMobile = () => {
    return (window && window.innerWidth < 768) || false;
  };

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const card =
      containerRef.current.querySelector<HTMLDivElement>(".pricing-card");
    if (!card) return;

    const scrollAmount = card.offsetWidth + (isMobile() ? 16 : 24);
    const newScrollLeft =
      direction === "left"
        ? containerRef.current.scrollLeft - scrollAmount
        : containerRef.current.scrollLeft + scrollAmount;

    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    const checkScroll = () => {
      updateDisabledState();
      if (
        containerRef.current &&
        containerRef.current.scrollLeft !== newScrollLeft
      ) {
        requestAnimationFrame(checkScroll);
      }
    };
    requestAnimationFrame(checkScroll);
  };

  useEffect(() => {
    updateDisabledState();
  }, [data]);

  if (!data.length || !data) return null;

  return (
    <section
      id="pricing"
      className="sm:py-16 py-10 sm:rounded-[36px] rounded-[25px] relative overflow-hidden"
    >
      <Image
        src={BgPricing}
        alt="Background Pricing"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-[1]"
        priority
        quality={100}
        height={500}
        width={500}
      />

      <div className="z-10 relative w-full">
        <div className="relative w-full flex items-center gap-4 justify-between container">
          <h2 className="text-center md:text-4xl lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 sm:text-3xl text-2xl font-bold lg:whitespace-nowrap leading-normal text-transparent bg-clip-text bg-gradient-to-t from-[#FEFEFF] to-[#00DBD2]">
            Packages & Pricing
          </h2>
          <div className="flex items-center gap-1.5 ml-auto bg-[#499997]/20 p-1 rounded-full">
            <Button
              size="icon"
              className="rounded-full size-10 bg-[#499997] hover:bg-[#499997]/80 disabled:opacity-50"
              aria-label="Scroll Left"
              onClick={() => scroll("left")}
              disabled={isDisabledLeft}
            >
              <ChevronLeft className="group-hover:translate-x-2 transition duration-300 size-5" />
            </Button>
            <Button
              size="icon"
              className="rounded-full size-10 bg-[#499997] hover:bg-[#499997]/80 disabled:opacity-50"
              aria-label="Scroll Right"
              onClick={() => scroll("right")}
              disabled={isDisabledRight}
            >
              <ChevronRight className="group-hover:-translate-x-2 transition duration-300 size-5" />
            </Button>
          </div>
        </div>

        <div
          className="sm:pt-14 pt-8 pb-4 flex overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
          ref={containerRef}
          onScroll={updateDisabledState}
        >
          <div
            className={cn(
              "flex flex-row shrink-0 justify-start sm:gap-6 gap-5 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-2xl pl-5"
            )}
          >
            {data
              .map((item, index) => (
                <m.div
                  // key={index}
                  className={cn(
                    "flex-1 shrink-0 sm:w-96 w-[21rem]",
                    data.length - 1 === index && "sm:pr-6 pr-5"
                  )}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2 * index,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ once: true }}
                  key={"card" + index}
                >
                  <div
                    className={cn(
                      "pricing-card lg:p-10 w-full h-full md:p-8 p-8 rounded-3xl bg-gradient-to-b from-transparent via-80% to-[#13D9D1]/70 border-2 border-[#499997] hover:-translate-y-2 transition duration-300"
                    )}
                  >
                    <div className="space-y-2">
                      <h4 className="sm:text-3xl font-bold text-2xl text-background leading-snug">
                        {getTextInsideParentheses(item.name)}
                      </h4>
                      <p className="sm:text-lg text-sm text-background">
                        {item?.short_description}
                      </p>
                    </div>

                    <div className="flex gap-1 text-background my-6 w-full justify-center">
                      <span className="sm:text-base text-sm">Rp</span>
                      <span className="lg:text-[42px] sm:text-3xl text-[40px] leading-none font-bold">
                        {formatIDR(item.price)}
                      </span>
                      <span className="self-end sm:text-base text-sm mb-0.5 whitespace-nowrap">
                        / {item.category === "monthly" ? "bulan" : "tahun"}
                      </span>
                    </div>

                    <Button
                      className="w-full h-12 rounded-xl sm:!text-lg !text-base shadow-lg shadow-primary/30"
                      onClick={() => {
                        if (index === 0) {
                          window.open(
                            process.env.NEXT_PUBLIC_APP_URL as string,
                            "_blank"
                          );
                        } else {
                          window.open(handleRedirect(item.name), "_blank");
                        }
                      }}
                    >
                      {index === 0 ? "Coba Gratis Sekarang" : "Mulai"}
                    </Button>

                    <div className="prose-ul:!space-y-2.5 mt-6">
                      {parse(item?.description || "", options)}
                    </div>
                  </div>
                </m.div>
              ))
              .slice(0, 4)}
          </div>
        </div>

        <Button
          variant="outline"
          size="lg"
          onClick={() => window.open(handleRedirect(), "_blank")}
          className="flex items-center gap-2.5 sm:h-12 h-12 !text-base !px-14 sm:!px-14 lg:mx-0 !mx-auto sm:!text-lg !border-background !text-background !font-semibold lg:!mt-10 !mt-8 !rounded-xl group hover:!bg-background hover:!text-foreground transition duration-300 bg-transparent"
        >
          <span>Request Pricing Detail</span>
          <ArrowRight className="group-hover:translate-x-2 transition duration-300 size-4" />
        </Button>
      </div>
    </section>
  );
};

const options = {
  replace: (domNode: any) => {
    if (domNode.name === "li") {
      return (
        <li className="flex gap-3">
          <div className="size-6 shrink-0 flex items-center justify-center rounded-full bg-gradient-to-b from-[#29D19C] to-[#32827A]">
            <Check className="w-4 h-4 shrink-0 text-[#C9FFCF]" />
          </div>
          <p className="md:text-base text-sm text-background">
            {domToReact(domNode.children)}
          </p>
        </li>
      );
    }
  },
};

function getTextInsideParentheses(text: string): string | null {
  const match = text.match(/\((.*?)\)/);
  return match ? match[1] : null;
}

export default PricingSection;
