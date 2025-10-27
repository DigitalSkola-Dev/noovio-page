"use client";

import { PRICING } from "@/constants/apiUrl";
import { clientGet } from "@/services/fetcher";
import { Pricing, ResponsePricing } from "@/types/index.type";
import { handleRedirectScroll } from "@/utils/redirect";
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
        href: "#features",
        links: [
          { label: "People Directory", href: "#features" },
          { label: "Collaboration Forum", href: "#features" },
          { label: "My Tasks & Requests", href: "#features" },
          { label: "Security & Role-Based Access", href: "#features" },
          { label: "Admin Dashboard", href: "#features" },
        ],
      },
      {
        title: "SOLUTIONS",
        href: "#about",
        links: [
          { label: "Smart Knowledge Finder", href: "#solutions" },
          { label: "Smart AI Assistant", href: "#solutions" },
          { label: "Unified Knowledge Hub", href: "#solutions" },
          { label: "Chatbot 24/7 & Onboarding Otomatis", href: "#solutions" },
          { label: "Monitoring Insights & Analytics", href: "#solutions" },
        ],
      },
      {
        title: "PRICING",
        href: "#pricing",
        links:
          isLoading || isError
            ? [
                { label: "Starter Plan", href: "#pricing" },
                { label: "Business Plan", href: "#pricing" },
                { label: "Enterprise Plan", href: "#pricing" },
              ]
            : pricing?.map((plan: Pricing) => ({
                label: plan.name,
                href: "#pricing",
              })),
      },
      {
        title: "CONTACT",
        href: "#contact",
        links: [
          { label: "Our Story", href: "#testimonials" },
          { label: "Contact Us", href: "#contact" },
        ],
      },
      // {
      //   title: "MORE",
      //   links: [
      //     { label: "News", href: "coming-soon" },
      //     { label: "Blog", href: "coming-soon" },
      //   ],
      // },
    ];
  }, [pricing, isLoading, isError]);

  return (
    <footer className="bg-background pt-10 md:pt-12">
      <div className="container">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
          {/* Brand & CTA */}
          <div className="lg:col-span-2 flex flex-col gap-6 md:gap-10">
            <div className="md:space-y-8 space-y-6">
              <Logo className="w-fit mx-auto md:mx-0" />
              <div className="flex md:justify-start justify-center gap-2.5 mt-2">
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

            <div className="space-y-2 md:space-y-4">
              <h4 className="sm:text-lg text-base font-semibold md:text-start text-center text-primary">
                PT Digitalisasi Talenta Dunia
              </h4>
              <p className="sm:text-base text-sm md:text-start text-center">
                Jl. Tebet Utara Dalam No.34, RT.5/RW.1, <br /> Tebet Tim., Kec.
                Tebet, Kota Jakarta Selatan
              </p>
            </div>

            <div className="space-y-2 md:space-y-4 w-full md:hidden block">
              <h4 className="sm:text-lg text-base md:text-start text-center font-semibold text-primary">
                Mulai Sekarang
              </h4>
              <Button
                onClick={handleRedirect}
                className="h-12 px-10 rounded-2xl bg-[#2C80FF] md:mx-0 mx-auto w-full sm:text-lg md:w-1/2 lg:w-3/4 text-base shadow shadow-[#2C80FF]/20"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:grid flex justify-around md:grid-cols-2 lg:grid-cols-4 lg:col-span-4">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4
                  className="font-bold text-[#C3C3C3] md:text-base text-[14px] md:text-start text-center cursor-pointer"
                  onClick={() => handleRedirectScroll(section.href)}
                >
                  {section.title}
                </h4>
                {/* <ul className="space-y-2 md:block hidden sm:text-base text-sm text-[#081646]">
                  {section.links &&
                    section.links.map((link, index) => (
                      <li
                        key={index}
                        className="hover:underline cursor-pointer"
                        onClick={() => handleRedirectScroll(link.href)}
                      >
                        {link?.label}
                      </li>
                    ))}
                </ul> */}
              </div>
            ))}
            <div className="space-y-2 md:space-y-4 w-full md:block hidden lg:col-span-2">
              <h4 className="sm:text-lg text-base md:text-start text-center font-semibold text-primary">
                Mulai Sekarang
              </h4>
              <Button
                onClick={handleRedirect}
                className="h-12 px-10 rounded-2xl bg-[#2C80FF] md:mx-0 mx-auto w-full max-w-xs sm:text-lg text-base shadow shadow-[#2C80FF]/20"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="md:mt-10 mt-6 bg-[#F6F6F6] py-4">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="sm:text-sm text-xs">
            © 2025 Noovio. All Rights Reserved.
          </p>

          <div className="flex gap-6 sm:text-sm text-xs">
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
