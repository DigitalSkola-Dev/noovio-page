"use client";

import { Carousel } from "@/components/ui/apple-cards-carousel";
import Features1Img from "../../assets/features-1.png";
import Features2Img from "../../assets/features-2.png";
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
    category: "Smart Knowledge Finder.",
    title: "Cari jawaban real-time dari dokumen internal.",
    src: Features1Img?.src,
  },
  {
    category: "Smart AI Assistant (NLP-powered).",
    title: "Jawaban instan lintas divisi menggunakan NLP.",
    src: Features2Img?.src,
  },
  {
    category: "Unified Knowledge Hub.",
    title: "Cari jawaban real-time dari dokumen internal.",
    src: Features1Img?.src,
  },
  {
    category: "Chatbot 24/7.",
    title: "Jawaban instan lintas divisi menggunakan NLP.",
    src: Features2Img?.src,
  },
  {
    category: "Insights & Analytics.",
    title: "Cari jawaban real-time dari dokumen internal.",
    src: Features1Img?.src,
  },
];
