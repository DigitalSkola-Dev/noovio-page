"use client";

import { Carousel } from "@/components/ui/apple-cards-carousel";
import Feature1Img from "../../assets/feature-1.png";
import Feature2Img from "../../assets/feature-2.png";
import Feature31Img from "../../assets/feature-3-1.png";
import Feature3Img from "../../assets/feature-3.png";
import Feature4Img from "../../assets/feature-4.png";
import Feature51Img from "../../assets/feature-5-1.png";
import Feature5Img from "../../assets/feature-5.png";
import FeatureCard from "../card/FeatureCard";

export function FeatureSection() {
  const cards = data.map((card, index) => (
    <FeatureCard key={card.src} {...card} index={index} />
  ));

  return (
    <section
      id="solutions"
      className="w-full h-full sm:py-16 py-10 relative z-10 bg-gradient-to-b from-[#F1F8FF] to-[#E2FFFE] sm:rounded-t-[35px] rounded-t-[25px] -mt-9"
    >
      <Carousel items={cards} title="Solusi Lengkap dalam Satu Platform" />
    </section>
  );
}

const data = [
  {
    category: (
      <>
        Smart Knowledge
        <br />
        Finder
      </>
    ),
    title: "Cari jawaban real-time dari dokumen internal",
    src: Feature1Img?.src,
    src2: null,
  },
  {
    category: (
      <>
        Smart AI Assistant
        <br />
        (NLP-powered)
      </>
    ),
    title: "Jawaban instan lintas divisi menggunakan NLP",
    src: Feature2Img?.src,
    src2: null,
  },
  {
    category: (
      <>
        Unified Knowledge
        <br />
        Hub
      </>
    ),
    title: "Satu tempat untuk SOP, manual, FAQ, dan dokumen perusahaan",
    src: Feature3Img?.src,
    src2: Feature31Img?.src,
  },
  {
    category: (
      <>
        Chatbot 24/7 &<br />
        Onboarding Otomatis
      </>
    ),
    title: "Bantu karyawan baru lebih cepat beradaptasi",
    src: Feature4Img?.src,
    src2: null,
  },
  {
    category: (
      <>
        Monitoring Insights
        <br />& Analytics
      </>
    ),
    title: "Identifikasi tren & kebutuhan informasi perusahaan",
    src: Feature5Img?.src,
    src2: Feature51Img?.src,
  },
];
