/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { memo, ReactNode, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef } from "swiper/react";

import { ChevronLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { SwiperOptions } from "swiper/types";
import { Button } from "../ui/button";

interface Props {
  id: string;
  breakpoints?: SwiperOptions["breakpoints"];
  children?: ReactNode;
  classNameWrapper?: string;
  classNameSwiper?: string;
  autoplay?: boolean;
  fadeEffect?: boolean;
  speed?: number;
  navigation?: boolean;
}

const Slider = ({
  id,
  children,
  breakpoints = {
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 40 },
    1024: { slidesPerView: 3, spaceBetween: 50 },
  },
  classNameWrapper,
  classNameSwiper,
  autoplay = false,
  fadeEffect = false,
  speed = 1000,
  navigation = false,
}: Props) => {
  const sliderRef = useRef<SwiperRef>(null);

  const [disabledPrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const onSlideChange = (swiper: any) => {
    setDisablePrev(swiper?.isBeginning);
    setDisableNext(swiper?.isEnd);
  };

  const handleNext = () => {
    sliderRef.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    sliderRef.current?.swiper.slidePrev();
  };

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-50% 0% -50% 0%",
  });

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.swiper) {
      if (inView && autoplay) {
        sliderRef.current.swiper.autoplay.start();
      } else {
        sliderRef.current.swiper.autoplay.stop();
      }
    }
  }, [inView, autoplay, children]);

  return (
    <div ref={ref} className={cn("w-full", classNameWrapper)}>
      <Swiper
        id={`${id}-slider`}
        ref={sliderRef}
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
        navigation={{
          nextEl: `#${id}-next`,
          prevEl: `#${id}-prev`,
        }}
        onSlideChange={({ realIndex }) => onSlideChange?.(realIndex)}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
              }
            : false
        }
        speed={speed}
        autoHeight={true}
        effect={fadeEffect ? "fade" : undefined}
        fadeEffect={fadeEffect ? { crossFade: true } : undefined}
        className={cn("w-full", classNameSwiper)}
      >
        {children}
      </Swiper>
      {navigation && (
        <>
          <Button
            className="absolute -left-4 top-[45%] shrink-0 size-10 -translate-y-1/2 z-10 text-background rounded-full p-2"
            disabled={disabledPrev}
            onClick={handlePrev}
          >
            <ChevronLeft className="size-5" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            className="absolute -right-4 top-[45%] shrink-0 size-10 -translate-y-1/2 z-10 text-background rounded-full p-2"
            disabled={disableNext}
            onClick={handleNext}
          >
            <ChevronLeft className="size-5 rotate-180" />
            <span className="sr-only">Next</span>
          </Button>
        </>
      )}
    </div>
  );
};

export default memo(Slider);
