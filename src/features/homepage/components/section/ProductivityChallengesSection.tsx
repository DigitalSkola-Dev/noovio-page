"use client";

import { motion as m } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { memo } from "react";
import Ornament from "../../assets/ornament.svg";
import Ornament2 from "../../assets/ornament2.svg";

const painPoints = [
  { id: 1, text: "Dokumen dan SOP tersebar di banyak tempat" },
  { id: 2, text: "Mencari informasi memakan banyak waktu kerja" },
  { id: 3, text: "Komunikasi antar divisi lambat dan tidak konsisten" },
  { id: 4, text: "Pengetahuan hilang saat karyawan resign" },
];

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
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ProductivityChallengesSection = () => {
  return (
    <section
      id="productivity-challenges"
      className="sm:pt-16 pt-10 pb-28 relative overflow-hidden"
    >
      <Image
        src={Ornament}
        alt="Ornament"
        width={400}
        height={400}
        priority
        quality={100}
        className="absolute -top-1 lg:left-0 md:-left-[20%] w-auto h-full z-[-1] md:object-contain opacity-50 object-cover"
        fetchPriority="high"
      />

      <Image
        src={Ornament2}
        alt="Ornament2"
        width={400}
        height={400}
        priority
        quality={100}
        className="absolute -top-1 lg:right-0 md:-right-[20%] w-auto h-full object-contain opacity-50 md:block hidden z-[-1]"
        fetchPriority="high"
      />

      <div className="w-full xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-2xl px-5 mx-auto">
        <div className="overflow-hidden">
          <m.h2
            className="text-center sm:text-3xl md:text-4xl text-2xl font-bold leading-normal"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Masalah yang{" "}
            <span className="text-primary">Menghambat Produktivitas</span>{" "}
            Perusahaan
          </m.h2>
        </div>

        <div className="lg:mt-12 md:mt-10 mt-8">
          <m.div
            className="flex flex-col gap-3"
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {painPoints.map((point) => (
              <m.div
                key={point.id}
                className="flex items-center gap-3"
                variants={child}
              >
                <CheckCircle className="text-[#C3C3C3] shrink-0" />
                <p className="sm:text-lg text-base">{point.text}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default memo(ProductivityChallengesSection);
