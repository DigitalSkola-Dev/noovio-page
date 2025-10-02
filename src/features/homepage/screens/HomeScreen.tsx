"use client";

import { Pricing } from "@/types/index.type";
import Hero from "../components/hero/Hero";
import { FeatureSection } from "../components/section/FeatureSection";
import FormSection from "../components/section/FormSection";
import HowNoovioWork from "../components/section/HowNoovioWork";
import ImpactSection from "../components/section/ImpactSection";
import InformationManagementSection from "../components/section/InformationManagementSection";
import PricingSection from "../components/section/PricingSection";
import ProductivityChallengesSection from "../components/section/ProductivityChallengesSection";
import { SupportFeatureSection } from "../components/section/SupportFeatureSection";
import TestimoniesSection from "../components/section/TestimoniesSection";
import useHomepage from "../hooks/useHomepage";

interface Props {
  pricing: Pricing[];
}

const HomeScreen = ({ pricing }: Props) => {
  const { form, isLoading, onSubmit } = useHomepage();
  return (
    <>
      <Hero />
      <ProductivityChallengesSection />
      <InformationManagementSection />
      <FeatureSection />
      <SupportFeatureSection />
      <ImpactSection />
      <TestimoniesSection />
      <HowNoovioWork />
      <PricingSection data={pricing} />
      <FormSection form={form} isLoading={isLoading} onSubmit={onSubmit} />
    </>
  );
};

export default HomeScreen;
