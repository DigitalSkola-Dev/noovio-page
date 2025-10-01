/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import formatIDR from "@/helpers/formatIDR";
import { motion as m } from "framer-motion";
import parse, { domToReact } from "html-react-parser";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import BgPricing from "../../assets/bg-pricing.webp";

const options = {
  replace: (domNode: any) => {
    if (domNode.name === "li") {
      return (
        <li className="flex gap-3">
          <div className="size-6 shrink-0 flex items-center justify-center rounded-full bg-gradient-to-b from-[#29D19C] to-[#32827A]">
            <Check className="w-4 h-4 shrink-0 text-[#C9FFCF]" />
          </div>
          <p className="md:text-base text-sm text-background">
            {domToReact(domNode.children)}
          </p>
        </li>
      );
    }
  },
};

const data = [
  {
    id: 1,
    name: "Starter Plan",
    sku: "starter-plan",
    short_description: "Untuk tim atau perusahaan skala kecil (1 departemen)",
    description:
      "<ul><li>Implementasi chatbot untuk 1 departemen</li><li>Penyimpanan hingga 1.000 dokumen (2 GB)</li><li>Fitur pencarian & respon real-time</li><li>Termasuk onboarding awal</li><ul>",
    price: 3500000,
    status: "enable",
    type: "product",
    category: "monthly",
    is_visible: true,
    tax_rate: 0,
    attributes: {
      limit: {
        max_user: 0,
        document_size: 0,
        storage_limit: "2GB",
        upload_document: 0,
      },
      service: {
        tier: "starter",
        cycle_type: "monthly",
        cycle_period: 1,
      },
    },
    created_at: "2025-07-11T11:36:55.051281+07:00",
    updated_at: "2025-07-11T11:36:55.051281+07:00",
    OrderItems: null,
    Subscriptions: null,
  },
  {
    id: 2,
    name: "Business Plan",
    sku: "business-plan",
    short_description:
      "Menjadi 6,900,000/ bulan jika langsung berlangganan 1 tahun",
    description:
      "<ul><li>Integrasi ke seluruh divisi</li><li>Penyimpanan hingga 10.000 dokumen (20 GB)</li><li>Kustomisasi struktur informasi sesuai kebutuhan</li><li>Onboarding automation & laporan analytics bulanan</li><li>Termasuk training penggunaan tim</li><ul>",
    price: 8000000,
    status: "enable",
    type: "product",
    category: "monthly",
    is_visible: true,
    tax_rate: 0,
    attributes: {
      limit: {
        max_user: 0,
        document_size: 0,
        storage_limit: "20GB",
        upload_document: 0,
      },
      service: {
        tier: "business",
        cycle_type: "monthly",
        cycle_period: 1,
      },
    },
    created_at: "2025-07-11T11:36:55.065195+07:00",
    updated_at: "2025-07-11T11:36:55.065195+07:00",
    OrderItems: null,
    Subscriptions: null,
  },
  {
    id: 3,
    name: "Enterprise Plan",
    sku: "enterprise-plan",
    short_description:
      "Menjadi 25,000,000/ bulan jika langsung berlangganan 1 tahun",
    description:
      "<ul><li>Full custom AI model training (berbasis konten internal perusahaan)</li><li>Penyimpanan hingga 50.000 dokumen (100 GB)</li><li>Integrasi ke tools perusahaan (Slack, Teams, Notion, dll)</li><li>Dedicated support & pelatihan admin</li><li>Fitur multilingual (opsional)</li><ul>",
    price: 29000000,
    status: "enable",
    type: "product",
    category: "monthly",
    is_visible: true,
    tax_rate: 0,
    attributes: {
      limit: {
        max_user: 0,
        document_size: 0,
        storage_limit: "100GB",
        upload_document: 0,
      },
      service: {
        tier: "business",
        cycle_type: "monthly",
        cycle_period: 1,
      },
    },
    created_at: "2025-07-11T11:36:55.067864+07:00",
    updated_at: "2025-07-11T11:36:55.067864+07:00",
    OrderItems: null,
    Subscriptions: null,
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="sm:py-16 py-10 sm:rounded-[36px] rounded-[25px] relative overflow-hidden"
    >
      <Image
        src={BgPricing}
        alt="Background Pricing"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-[1]"
        priority
        quality={100}
        height={500}
        width={500}
      />

      <div className="container z-10 relative">
        <m.h2
          className="text-center md:text-4xl sm:text-3xl text-2xl font-bold lg:whitespace-nowrap leading-normal text-transparent bg-clip-text bg-gradient-to-t from-[#FEFEFF] to-[#00DBD2]"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Packages & Pricing
        </m.h2>

        <div className="sm:my-14 my-12 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-6 lg:gap-8 md:gap-6 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="lg:p-10 md:p-8 p-8 rounded-3xl bg-gradient-to-b from-transparent via-80% to-[#13D9D1]/70 border-2 border-[#499997] hover:-translate-y-2 transition duration-300"
            >
              <div className="space-y-2">
                <h4 className="sm:text-3xl font-bold text-2xl text-background leading-snug">
                  {item.name}
                </h4>
                <p className="sm:text-lg text-sm text-background">
                  {item?.short_description}
                </p>
              </div>

              <div className="flex gap-2 text-background my-6 w-full justify-center">
                <span className="sm:text-base text-sm">Rp</span>
                <span className="lg:text-[42px] sm:text-3xl text-[40px] leading-none font-bold">
                  {formatIDR(item.price)}
                </span>
                <span className="self-end sm:text-base text-sm mb-0.5 whitespace-nowrap">
                  / {item.category === "monthly" ? "bulan" : "tahun"}
                </span>
              </div>

              <Button className="w-full h-12 rounded-2xl sm:!text-lg !text-base shadow-lg shadow-primary/30">
                {index === 0 ? "Coba Gratis Sekarang" : "Mulai"}
              </Button>

              <div className="prose-ul:!space-y-2.5 mt-6">
                {parse(item?.description || "", options)}
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2.5 sm:h-12 h-12 !text-base !px-14 sm:!px-14 lg:mx-0 !mx-auto sm:!text-lg !border-background !text-background !font-semibold lg:!mt-10 !mt-8 !rounded-xl group hover:!bg-background hover:!text-foreground transition duration-300 bg-transparent"
        >
          <span>Request Pricing Detail</span>
          <ArrowRight className="group-hover:translate-x-2 transition duration-300 size-4" />
        </Button>
      </div>
    </section>
  );
};

export default PricingSection;
