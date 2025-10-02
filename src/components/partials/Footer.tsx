"use client";

import { PRICING } from "@/constants/apiUrl";
import { clientGet } from "@/services/fetcher";
import { Pricing, ResponsePricing } from "@/types/index.type";
import { useQuery } from "@tanstack/react-query";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { memo, useMemo } from "react";
import {
  LinkedInIcon,
  Logo,
  TiktokIcon,
  WhatsAppIcon,
  XTwitterIcon,
  YoutubeIcon,
} from "../svg";
import { Button } from "../ui/button";

const socialLinks = [
  {
    id: 1,
    icon: Instagram,
    href: "https://www.instagram.com/digital.skola",
  },
  {
    id: 2,
    icon: TiktokIcon,
    href: "https://www.tiktok.com/@digital.skola",
  },
  {
    id: 3,
    icon: XTwitterIcon,
    href: "https://x.com/digital_skola",
  },
  {
    id: 4,
    icon: YoutubeIcon,
    href: "https://www.youtube.com/@digital-skola",
  },
  {
    id: 5,
    icon: WhatsAppIcon,
    href: "https://api.whatsapp.com/send?phone=6281807835745&text=Halo,%20saya%20melihat%20Icon%20Footer%20Website%20Digital%20Skola%20dan%20tertarik%20untuk%20berkonsultasi",
  },
  {
    id: 6,
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/school/digital-skola/posts/?feedView=all",
  },
];

const Footer = () => {
  const handleRedirect = () => {
    window.open(process.env.NEXT_PUBLIC_APP_URL as string, "_blank");
  };

  const {
    data: pricing,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pricing"],
    queryFn: () => clientGet<ResponsePricing>(PRICING),
    select(data) {
      return data.data || [];
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const footerLinks = useMemo(() => {
    return [
      {
        title: "FEATURES",
        links: [
          { label: "Smart Knowledge Finder", href: "coming-soon" },
          { label: "Smart AI Assistant", href: "coming-soon" },
          { label: "Unified Knowledge Hub", href: "coming-soon" },
          { label: "Chatbot 24/7", href: "coming-soon" },
          { label: "Insights & Analytics", href: "coming-soon" },
          { label: "Supporting Features", href: "coming-soon" },
        ],
      },
      {
        title: "SOLUTIONS",
        links: [
          { label: "Enterprise", href: "coming-soon" },
          { label: "Digital Government", href: "coming-soon" },
          { label: "Start Up", href: "coming-soon" },
          { label: "Company", href: "coming-soon" },
          { label: "Partner & Collaboration", href: "coming-soon" },
        ],
      },
      {
        title: "PRICING",
        links:
          isLoading || isError
            ? [
                { label: "Starter Plan", href: "coming-soon" },
                { label: "Business Plan", href: "coming-soon" },
                { label: "Enterprise Plan", href: "coming-soon" },
              ]
            : pricing?.map((plan: Pricing) => ({
                label: plan.name,
                href: "coming-soon",
              })),
      },
      {
        title: "ABOUT US",
        links: [
          { label: "Our Story", href: "coming-soon" },
          { label: "Contact Us", href: "coming-soon" },
        ],
      },
      {
        title: "MORE",
        links: [
          { label: "News", href: "coming-soon" },
          { label: "Blog", href: "coming-soon" },
        ],
      },
    ];
  }, [pricing, isLoading, isError]);

  return (
    <footer className="bg-background pt-12">
      <div className="container">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
          {/* Brand & CTA */}
          <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-10">
            <div className="sm:space-y-8 space-y-6">
              <Logo />
              <div className="flex gap-2.5 mt-2">
                {socialLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full size-10 flex items-center justify-center !bg-[#F4F4F4] hover:!bg-gray-200 transition group"
                  >
                    <link.icon className="text-[#C2C2C2] group-hover:text-gray-600 transition size-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="sm:text-lg text-base font-semibold text-primary">
                PT Digitalisasi Talenta Dunia
              </h4>
              <p className="sm:text-base text-sm">
                Jl. Tebet Utara Dalam No.34, RT.5/RW.1, <br /> Tebet Tim., Kec.
                Tebet, Kota Jakarta Selatan
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="sm:text-lg text-base font-semibold text-primary">
                Mulai Demo Gratis Sekarang
              </h4>
              <Button
                onClick={handleRedirect}
                className="h-12 px-10 rounded-2xl bg-[#2C80FF] sm:text-lg text-base shadow shadow-[#2C80FF]/20"
              >
                Demo Gratis Noovio
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:col-span-4 gap-6">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold mb-4 text-[#C3C3C3]">
                  {section.title}
                </h4>
                <ul className="space-y-2 sm:text-base text-sm text-[#081646]">
                  {section.links &&
                    section.links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className="hover:underline">
                          {link?.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="mt-10 bg-[#F6F6F6] py-4">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2025 Noovio. All Rights Reserved.</p>

          <div className="flex gap-6 text-sm">
            <Link href="coming-soon">Terms of Service</Link>
            <Link href="coming-soon">Privacy Policy</Link>
            <Link href="coming-soon">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
