"use client";

import { Button } from "@/components/ui/button";
import { motion as m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { memo } from "react";

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const workSteps = [
  {
    id: 1,
    title: "Upload Dokumen",
    description: "SOP, panduan, laporan, dsb",
  },
  {
    id: 2,
    title: "AI Processing",
    description: "Noovio mengorganisir & menghubungkan data",
  },
  {
    id: 3,
    title: "Chat & Kolaborasi",
    description: "Karyawan bertanya & langsung dapat jawaban",
  },
  {
    id: 4,
    title: "Analisis & Insight",
    description: "Manajemen melihat tren informasi",
  },
];

const handleRedirect = () => {
  return `https://api.whatsapp.com/send?phone=6285640718857&text=Halo,%20saya%20ingin%20menjadwalkan%20demo%20Noovio.%20Mohon%20informasinya.`;
};

const HowNoovioWork = () => {
  return (
    <section
      id="work"
      className="sm:pt-4 pt-4 sm:pb-16 pb-14 w-full mx-auto xl:max-w-6xl lg:max-w-5xl md:max-w-2xl px-5"
    >
      <div className="overflow-hidden lg:mb-12 mb-8">
        <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold lg:whitespace-nowrap leading-normal text-foreground sm:text-start text-center">
          Cara Kerja Noovio
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-8 sm:gap-10">
        <m.div
          className="sm:space-y-6 space-y-4 lg:order-first order-last"
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {workSteps.map((step, index) => (
            <m.div key={step.id} className="flex gap-4" variants={child}>
              <div className="bg-primary rounded-full size-12 flex items-center justify-center flex-shrink-0 text-primary-accent font-bold sm:text-2xl text-xl">
                <span className="-mr-0.5 -mb-0.5">{index + 1}</span>
              </div>
              <div className="space-y-0.5">
                <h4 className="sm:text-xl font-semibold text-base">
                  {step.title}
                </h4>
                <p className="text-sm text-[#001D80] sm:text-base">
                  {step.description}
                </p>
              </div>
            </m.div>
          ))}

          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2.5 sm:h-12 h-12 !text-base !px-14 sm:!px-14 lg:mx-0 mx-auto sm:!text-lg !border-primary !text-primary !font-semibold lg:!mt-10 !mt-8 !rounded-xl group hover:!bg-primary hover:!text-background transition duration-300"
            onClick={() => window.open(handleRedirect(), "_blank")}
          >
            <span>Jadwalkan Demo</span>
            <ArrowRight className="group-hover:translate-x-2 transition duration-300 size-4" />
          </Button>
        </m.div>
        <m.div
          className="flex justify-center items-center h-72 sm:h-80 overflow-hidden rounded-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <iframe
            // width="951"
            // height="535"
            src="https://www.youtube.com/embed/Bh9G8a5sL7E"
            title="Digital Skola - Company Profile"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </m.div>
      </div>
    </section>
  );
};

export default memo(HowNoovioWork);
