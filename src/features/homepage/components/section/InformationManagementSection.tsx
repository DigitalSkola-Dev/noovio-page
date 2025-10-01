"use client";

import { Icon } from "@/components/svg";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { memo } from "react";
import Mockup from "../../assets/mockup.webp";

const InformationManagementSection = () => {
  return (
    <section
      id="information-management"
      className="sm:pt-16 pt-10 relative overflow-hidden bg-gradient-to-br from-[#E2FFFE] to-[#CAE6FD] -mt-14 sm:-mt-10 sm:rounded-t-[50px] rounded-t-[30px]"
    >
      <Icon className="absolute sm:top-[80%] top-[85%] -translate-y-1/2 left-1/2 -translate-x-1/2 z-[0] rotate-[30deg] w-[24rem] sm:w-[28rem] md:w-[32rem] lg:w-[40rem] h-full" />

      <div className="w-full xl:max-w-4xl lg:max-w-4xl md:max-w-2xl sm:max-w-2xl sm:px-0 px-5 mx-auto relative z-[1]">
        <div className="overflow-hidden">
          <m.h2
            className="text-center md:text-4xl sm:text-3xl text-2xl font-bold lg:whitespace-nowrap leading-normal text-transparent bg-gradient-to-r from-primary to-primary-accent bg-clip-text"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Transformasikan Cara Perusahaan Anda{" "}
            <br className="lg:block hidden" /> Mengelola Informasi
          </m.h2>
        </div>

        <div className="overflow-hidden">
          <m.p
            className="text-center sm:text-lg text-base leading-7 text-foreground mt-6 max-w-[90%] mx-auto"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dengan Noovio, seluruh informasi perusahaan mulai dari SOP, panduan,
            hingga dokumen penting tersimpan dalam satu sistem terpusat.
            Karyawan cukup bertanya melalui chatbot, dan jawaban relevan akan
            muncul dalam hitungan detik.
          </m.p>
        </div>

        <div className="md:mt-8 mt-6 md:w-[25rem] lg:w-[30rem] sm:w-[22rem] w-[18rem] mx-auto group">
          <Image
            src={Mockup}
            alt="Mockup"
            width={800}
            height={800}
            priority
            quality={75}
            className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(InformationManagementSection);
