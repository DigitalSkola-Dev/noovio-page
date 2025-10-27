"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useMediaQuery } from "@/hooks";
import { motion as m } from "framer-motion";
import Image from "next/image";
import BgHeroMobile from "../../assets/bg-hero-mobile.png";
import CarouselsMobile from "../../assets/bg-hero.webp";
import Carousels from "../../assets/carousels.webp";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header
      id="hero"
      className="relative w-full overflow-hidden md:h-fit sm:h-[100vh] h-[76vh]"
    >
      <Image
        src={isMobile ? CarouselsMobile : Carousels}
        alt="Hero"
        width={1920}
        height={1080}
        priority
        quality={75}
        className="w-full h-full md:object-contain object-cover"
        fetchPriority="high"
      />

      {/* <m.div
        className="absolute bottom-4 left-6 z-[1]"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={App}
          alt="App"
          width={400}
          height={400}
          priority
          quality={100}
          className="w-full h-full object-cover"
        />
      </m.div>

      <div className="absolute bottom-0 right-0 z-[1] bg-slate-100">
        <Image
          src={Hand}
          alt="Hand"
          width={800}
          height={800}
          priority
          quality={100}
          className="w-full h-full object-contain"
        />
      </div> */}

      {!isMobile && (
        <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3] w-full">
          <div className="text-center">
            <div className="overflow-hidden">
              <m.h1
                className="xl:!text-5xl lg:!text-[44px] md:!text-3xl !text-2xl leading-snug !font-bold text-background whitespace-break-spaces !my-0"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Tingkatkan{" "}
                <span className="text-primary-accent">Produktivitas Tim</span>
                <br className="md:block hidden" /> dengan Noovio AI
              </m.h1>
            </div>
            <div className="overflow-hidden lg:!mt-8 lg:!mb-14 md:!mt-4 md:!mb-8">
              <m.p
                className="lg:!text-xl md:!text-sm !text-lg text-background !leading-normal"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                AI-driven platform yang membantu perusahaan bekerja lebih{" "}
                <br className="md:block hidden" /> cepat, cerdas, dan efisien
                lewat pencarian dokumen, <br className="md:block hidden" />{" "}
                knowledge base, dan otomatisasi kerja.
              </m.p>
            </div>
            <m.div
              className="flex justify-center text-center group"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <HoverBorderGradient
                as="button"
                containerClassName="!border-none !bg-transparent group-hover:-translate-y-2"
                className="bg-gradient-to-r from-primary-accent to-[#CBFFFD] text-[#0E33A6] md:h-10 lg:h-12 flex items-center md:px-8 lg:px-10 rounded-lg lg:rounded-xl lg:!text-lg font-medium cursor-pointer"
                onClick={() => {
                  window.open(
                    process.env.NEXT_PUBLIC_APP_URL as string,
                    "_blank"
                  );
                }}
              >
                Coba Demo Sekarang!
              </HoverBorderGradient>
            </m.div>
          </div>
        </div>
      )}
      {isMobile && (
        <>
          <div className="absolute top-[32%] transform px-5 sm:px-8 -translate-y-1/2 z-[3] w-full">
            <div className="text-start">
              <div className="overflow-hidden">
                <m.h1
                  className="!text-3xl sm:!text-4xl text-center leading-snug !font-bold text-background !my-0"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Tingkatkan{" "}
                  <span className="text-primary-accent">Produktivitas Tim</span>
                  <br className="sm:block hidden" />
                  <br className="md:block hidden" /> dengan Noovio AI
                </m.h1>
              </div>
              <div className="overflow-hidden !mt-5 !mb-7">
                <m.p
                  className="!text-base sm:!text-lg text-background text-center !leading-normal mx-auto max-w-[92%]"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  AI-driven platform yang membantu perusahaan bekerja lebih
                  cepat, cerdas, dan efisien lewat pencarian dokumen, knowledge
                  base, dan otomatisasi kerja.
                </m.p>
              </div>
              <m.div
                className="flex justify-center group"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <HoverBorderGradient
                  as="button"
                  containerClassName="!border-none !bg-transparent group-hover:-translate-y-2"
                  className="bg-gradient-to-r from-primary-accent to-[#CBFFFD] text-[#0E33A6] h-11 sm:!text-lg sm:h-12 flex items-center px-8 rounded-lg font-semibold cursor-pointer"
                  onClick={() => {
                    window.open(
                      process.env.NEXT_PUBLIC_APP_URL as string,
                      "_blank"
                    );
                  }}
                >
                  Coba Demo Sekarang!
                </HoverBorderGradient>
              </m.div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6 w-[90%] absolute -bottom-5 left-[53%] -translate-x-1/2">
            {/* Glow / Sinar effect behind image */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div
                className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[80%] h-24 blur-2xl rounded-[32px]"
                style={{
                  background:
                    "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
                  filter: "blur(2px)",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              />
              <div className="absolute left-1/2 bottom-2 -translate-x-1/2 w-[85%] h-6 rounded-full bg-[#FFFFFF]/50 blur-lg" />
            </div>

            <div className="w-full h-auto">
              <Image
                src={BgHeroMobile}
                alt="Noovio AI"
                className="w-full h-full object-cover"
                quality={100}
                fetchPriority="high"
              />
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Hero;
