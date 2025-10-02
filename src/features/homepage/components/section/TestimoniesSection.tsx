"use client";

import { Counter } from "@/components/counter";
import { Slider } from "@/components/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getInitials from "@/helpers/getInitials";
import { motion as m } from "framer-motion";
import { memo } from "react";
import { SwiperSlide } from "swiper/react";

const data = [
  {
    id: 1,
    name: "Intan Pratiwi Firdaus",
    role: "HR Director",
    company: "PT. Astra International Tbk",
    testimony:
      "Noovio membantu kami menyimpan dan mengelola dokumen penting perusahaan dengan lebih efisien. Pencarian dokumen kini lebih cepat, sehingga tim HR dapat fokus pada tugas strategis lainnya.",
    avatar_url:
      "https://ui-avatars.com/api/?name=Intan+Pratiwi+Firdaus&background=random",
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "IT Manager",
    company: "PT. Telkom Indonesia",
    testimony:
      "Implementasi Noovio di perusahaan kami sangat membantu dalam meningkatkan kolaborasi antar tim. Semua informasi tersimpan dengan rapi dan mudah diakses, mengurangi risiko kehilangan data penting.",
    avatar_url:
      "https://ui-avatars.com/api/?name=Budi+Santoso&background=random",
  },
  {
    id: 3,
    name: "Siti Aisyah",
    role: "Marketing Head",
    company: "PT. Unilever Indonesia",
    testimony:
      "Dengan Noovio, tim marketing kami dapat berbagi pengetahuan dan materi kampanye dengan lebih efektif. Onboarding anggota baru menjadi lebih cepat karena semua informasi sudah terdokumentasi dengan baik.",
    avatar_url:
      "https://ui-avatars.com/api/?name=Siti+Aisyah&background=random",
  },
];

const counter = [
  {
    id: 1,
    name: "Kepuasan",
    value: 98,
    suffix: "%",
  },
  {
    id: 2,
    name: "Perusahaan & Komunitas",
    value: 90,
    suffix: "+",
  },
  {
    id: 3,
    name: "Pengguna Aktif",
    value: 5000,
    suffix: "+",
  },
];

const TestimoniesSection = () => {
  return (
    <section id="testimonials" className="sm:py-10 py-8 container">
      <div className="bg-gradient-to-br from-[#F2F2F2] to-background border border-foreground/10 rounded-3xl sm:py-12 py-8 md:px-0 sm:px-10 px-6">
        <div className="overflow-hidden">
          <m.h2
            className="text-center md:text-4xl sm:text-3xl text-2xl font-bold lg:whitespace-nowrap leading-normal text-transparent bg-clip-text bg-gradient-to-r from-[#081646] to-[#1436AC]"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Dipercaya oleh Perusahaan & Komunitas{" "}
            <br className="lg:block hidden" /> dari Berbagai Ukuran
          </m.h2>
        </div>

        <div className="overflow-hidden my-6 ">
          <m.p
            className="text-center sm:text-base text-sm lg:whitespace-nowrap leading-normal text-[#001D80]"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tentang Penggunaan Noovio
          </m.p>
        </div>

        <div className="sm:mb-12 mb-10 w-full 2xl:max-w-5xl lg:max-w-4xl md:max-w-xl mx-auto">
          <Slider
            id="testimony"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            autoplay
            // fadeEffect={true}
            speed={2000}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index} className="cursor-grab">
                <div className="sm:py-8 py-6 sm:px-14 px-7 w-full bg-gradient-to-br from-background to-[#C3FFFD] border border-[#C9F9F8] rounded-3xl space-y-5">
                  <p className="text-[#0D2E87] sm:text-lg text-sm font-medium">
                    “{item.testimony}”
                  </p>

                  <div className="flex items-center sm:gap-4 gap-3">
                    <Avatar className="sm:!size-16 !size-14 bg-gradient-to-b !from-[#00DBD2] !to-[#2EA7D7]">
                      <AvatarImage src={item.avatar_url} alt={item.name} />
                      <AvatarFallback className="text-lg">
                        {getInitials(item.name)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="space-y-0.5">
                      <h4 className="font-semibold text-base leading-snug sm:text-lg text-foreground line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="sm:text-sm text-xs text-muted-foreground">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Slider>
          {/* <div className="sm:py-8 py-6 sm:px-14 px-7 w-full bg-gradient-to-br from-background to-[#C3FFFD] border border-[#C9F9F8] rounded-3xl space-y-5">
            <p className="text-[#0D2E87] sm:text-lg text-sm font-medium">
              “{data[0].testimony}”
            </p>

            <div className="flex items-center sm:gap-4 gap-3">
              <Avatar className="sm:!size-16 !size-14 bg-gradient-to-b !from-[#00DBD2] !to-[#2EA7D7]">
                <AvatarImage src={data[0].avatar_url} alt={data[0].name} />
                <AvatarFallback className="text-lg">
                  {getInitials(data[0].name)}
                </AvatarFallback>
              </Avatar>

              <div className="space-y-0.5">
                <h4 className="font-semibold text-base leading-snug sm:text-lg text-foreground line-clamp-1">
                  {data[0].name}
                </h4>
                <p className="sm:text-sm text-xs text-muted-foreground">
                  {data[0].role}, {data[0].company}
                </p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="flex justify-center overflow-hidden">
          {counter.map((item) => (
            <div
              key={item.id}
              className="text-center border-r last:border-0 sm:space-y-0.5 lg:px-10 px-2.5"
            >
              <m.h3
                className="font-bold lg:text-4xl sm:text-3xl text-xl text-primary"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Counter target={item.value} />
                {item.suffix}
              </m.h3>
              <m.p
                className="text-foreground lg:text-lg sm:text-base text-sm sm:w-40 w-24 leading-snug"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {item.name}
              </m.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(TestimoniesSection);
