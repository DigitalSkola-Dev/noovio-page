"use client";

import {
  CollaborationIcon,
  EmployeeRetentionIcon,
  KnowledgeSharingIcon,
  ProductivityIcon,
  RiskReductionIcon,
  TimeCostIcon,
} from "@/components/svg";
import { motion as m } from "framer-motion";
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
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const impactData = [
  {
    id: 1,
    title: "Hemat Waktu & Biaya",
    description: "Kurangi waktu pencarian dokumen hingga 70%",
    icon: TimeCostIcon,
  },
  {
    id: 2,
    title: "Kolaborasi Lintas Divisi",
    description: "Semua tim terhubung lewat satu sistem",
    icon: CollaborationIcon,
  },
  {
    id: 3,
    title: "Produktivitas Lebih Tinggi",
    description: "Karyawan fokus pada eksekusi, bukan mencari file",
    icon: ProductivityIcon,
  },
  {
    id: 4,
    title: "Budaya Knowledge Sharing",
    description: "Pengetahuan tetap terjaga meski ada turnover",
    icon: KnowledgeSharingIcon,
  },
  {
    id: 5,
    title: "Minimalkan Risiko & Kesalahan",
    description: "Informasi konsisten & terdokumentasi",
    icon: RiskReductionIcon,
  },
  {
    id: 6,
    title: "Retensi & Pengalaman Karyawan",
    description: "Onboarding cepat & pengalaman kerja lebih smooth",
    icon: EmployeeRetentionIcon,
  },
];

const ImpactSection = () => {
  return (
    <section
      id="impact"
      className="sm:py-16 py-10 relative overflow-hidden bg-gradient-to-br from-[#E2FFFE] to-background sm:rounded-t-[50px] rounded-t-[30px]"
    >
      <div className="w-full mx-auto xl:max-w-6xl lg:max-w-5xl md:max-w-2xl px-5">
        <div className="overflow-hidden">
          <m.h2
            className="text-center md:text-4xl sm:text-3xl text-2xl font-bold lg:whitespace-nowrap leading-normal text-foreground"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Dampak Nyata Noovio untuk Perusahaan
          </m.h2>
        </div>

        <m.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:gap-6 md:gap-6 sm:gap-6 gap-5 sm:mt-10 mt-8"
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {impactData.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <m.div
                key={item.id}
                className="flex items-center sm:gap-4 gap-4"
                variants={child}
              >
                <div className="rounded-full bg-gradient-to-b from-[#C8FFF9] to-[#73FFF1] lg:size-18 sm:size-16 size-14 flex items-center justify-center flex-shrink-0">
                  <item.icon className="lg:size-10 sm:size-9 size-8" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-semibold lg:text-xl sm:text-lg text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[#001D80] lg:text-base text-sm">
                    {item.description}
                  </p>
                </div>
              </m.div>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default memo(ImpactSection);
