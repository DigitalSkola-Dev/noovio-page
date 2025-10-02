/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { IconX } from "@tabler/icons-react";
import { ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ImageProps } from "next/image";
import React, {
  createContext,
  JSX,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "./button";

interface CarouselProps {
  items: JSX.Element[];
  title?: string;
  isTitleCentered?: boolean;
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content?: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  title = "Our Features",
  isTitleCentered = false,
}: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDisabledLeft, setIsDisabledLeft] = useState(true);
  const [isDisabledRight, setIsDisabledRight] = useState(false);

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  const updateDisabledState = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setIsDisabledLeft(scrollLeft <= 0);
    setIsDisabledRight(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const card =
      containerRef.current.querySelector<HTMLDivElement>(".carousel-card");
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

    // samain sama Pricing: pantau sampai posisi scroll berhenti
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
  }, [items]);

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between sm:gap-0 gap-3 w-full xl:mb-8 sm:mb-6 mb-4 relative container">
        {isTitleCentered ? (
          <h2 className="bg-gradient-to-br from-primary leading-snug to-primary-accent bg-clip-text text-transparent font-bold md:text-4xl sm:text-3xl text-2xl lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
            {title}
          </h2>
        ) : (
          <h2 className="bg-gradient-to-br from-primary leading-snug to-primary-accent bg-clip-text text-transparent font-bold md:text-4xl sm:text-3xl text-2xl">
            {title}
          </h2>
        )}
        <div className="rounded-full ml-auto flex items-center p-1 gap-2.5 justify-between border bg-background border-[#EFEFEF]">
          <Button
            size="icon"
            className="rounded-full disabled:bg-background hover:bg-[#D9FFFD] bg-[#D9FFFD] group size-10"
            onClick={() => scroll("left")}
            disabled={isDisabledLeft}
            aria-label="Scroll Left"
          >
            <ChevronLeft className="size-6 transition duration-300 group-hover:text-primary text-primary group-disabled:text-[#d4d4d4]" />
          </Button>
          <Button
            size="icon"
            className="rounded-full disabled:bg-background hover:bg-[#D9FFFD] bg-[#D9FFFD] group size-10"
            onClick={() => scroll("right")}
            disabled={isDisabledRight}
            aria-label="Scroll Right"
          >
            <ChevronLeft className="size-6 transition duration-300 group-hover:text-primary text-primary group-disabled:text-[#d4d4d4] rotate-180" />
          </Button>
        </div>
      </div>

      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] overflow-y-hidden"
        ref={containerRef}
        onScroll={updateDisabledState}
      >
        <div
          className={cn(
            "flex flex-row shrink-0 justify-start gap-4 pl-4",
            "mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-2xl"
          )}
        >
          {items.map((item, index) => (
            <motion.div
              key={"card" + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true }}
              className="carousel-card shrink-0 rounded-3xl last:pr-5 md:last:pr-6 pb-10 pt-4"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () =>
    handleClose()
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
