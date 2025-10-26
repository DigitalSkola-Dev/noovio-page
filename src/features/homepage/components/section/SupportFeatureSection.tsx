"use client";

import { cn } from "@/lib/utils";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Img5 from "../../assets/admin-dashboard.png";
import BgImg from "../../assets/bg-support.png";
import Img2 from "../../assets/collaboration-forum.png";
import Img3 from "../../assets/my-tasks.png";
import Img1 from "../../assets/people-directory.png";
import Img4 from "../../assets/security.png";

export function SupportFeatureSection() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
    if (imgRef.current) {
      imgRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="features"
      className="w-full h-full sm:py-16 py-10 relative z-10"
    >
      <Image
        src={BgImg}
        alt="Background Support Feature"
        className="w-full h-full object-cover absolute left-0 z-0 top-0"
        fetchPriority="high"
        priority
        width={1920}
        height={1080}
        quality={100}
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br z-10 from-[#040f35] via-[#040f35e6] to-[#007c63d5]" /> */}
      {/* <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(140deg, #040F35 0%, #040F35E6 75%, #007C63D5 100%)",
        }}
      /> */}

      <div className="relative w-full space-y-8 lg:space-y-10 z-20 overflow-hidden">
        <h2 className="bg-gradient-to-br from-background leading-snug to-[#999999] bg-clip-text text-transparent font-bold md:text-4xl sm:text-3xl text-2xl text-center">
          Supporting Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:gap-0 sm:gap-2 gap-8 lg:h-[34rem] w-full mx-auto xl:max-w-6xl lg:max-w-5xl md:max-w-2xl px-5">
          <div className="space-y-5 sm:order-first order-last lg:space-y-6 h-full flex flex-col justify-center">
            {data.map((item, index) => (
              <div
                key={item.title}
                onClick={() => handleActiveIndex(index)}
                className="cursor-pointer group"
              >
                <m.div
                  className="lg:space-y-2 space-y-1 pl-4 lg:pl-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h4
                    className={cn(
                      "font-bold text-lg sm:text-xl lg:text-2xl",
                      activeIndex === index
                        ? "text-[#0FD8D2]"
                        : "text-background group-hover:text-[#0FD8D2]"
                    )}
                  >
                    {item.title}
                  </h4>
                  <p className="md:text-base text-sm text-background">
                    {item.description}
                  </p>
                </m.div>
                <div className="relative h-[5px] w-full mt-4 lg:mt-5">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] rounded-full bg-background" />
                  {activeIndex === index && (
                    <m.div
                      className="relative w-[20%] h-full rounded-full bg-[#0FD8D2]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "25%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <m.div
            key={data[activeIndex].title}
            className="w-full h-96 sm:h-full overflow-hidden scroll-mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            ref={imgRef as React.RefObject<HTMLDivElement>}
          >
            <Image
              src={data[activeIndex].src}
              alt={data[activeIndex].title}
              width={800}
              height={800}
              className="object-contain h-full w-full"
              quality={100}
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    title: "People Directory",
    description: "Akses cepat informasi rekan kerja",
    src: Img1,
  },
  {
    title: "Collaboration Forum",
    description: "Diskusi & knowledge sharing lintas tim",
    src: Img2,
  },
  {
    title: "My Tasks & Requests",
    description: "Catat & kelola permintaan informasi",
    src: Img3,
  },
  {
    title: "Security & Role-Based Access",
    description: "Data perusahaan tetap aman dengan enkripsi data",
    src: Img4,
  },
  {
    title: "Admin Dashboard",
    description: "Ringkasan aktivitas & highlight dokumen penting",
    src: Img5,
  },
];
