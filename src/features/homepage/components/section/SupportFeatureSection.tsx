"use client";

import { Carousel } from "@/components/ui/apple-cards-carousel";
import FeaturesImg from "../../assets/features-2.png";
import SupportFeatureCard from "../card/SupportFeatureCard";

export function SupportFeatureSection() {
  const cards = data.map((card, index) => (
    <SupportFeatureCard key={card.src} {...card} index={index} />
  ));

  return (
    <div className="w-full h-full sm:py-16 py-10 relative z-10 bg-background">
      <Carousel items={cards} title="Supporting Features" isTitleCentered />
    </div>
  );
}

const data = [
  {
    category: "People Directory",
    title: "Akses cepat informasi rekan kerja",
    src: FeaturesImg?.src,
  },
  {
    category: "Collaboration Forum",
    title: "Akses cepat informasi rekan kerja",
    src: FeaturesImg?.src,
  },
  {
    category: "My Tasks & Requests",
    title: "Catat & kelola permintaan informasi",
    src: FeaturesImg?.src,
  },
];
