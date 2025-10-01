"use client";

import Hero from "../components/hero/Hero";
import FormSection from "../components/section/FormSection";
import HowNoovioWork from "../components/section/HowNoovioWork";
import ImpactSection from "../components/section/ImpactSection";
import InformationManagementSection from "../components/section/InformationManagementSection";
import PricingSection from "../components/section/PricingSection";
import ProductivityChallengesSection from "../components/section/ProductivityChallengesSection";
import TestimoniesSection from "../components/section/TestimoniesSection";
import useHomepage from "../hooks/useHomepage";

const HomeScreen = () => {
  const { form, onSubmit } = useHomepage();

  return (
    <>
      <Hero />
      <ProductivityChallengesSection />
      <InformationManagementSection />
      <ImpactSection />
      <TestimoniesSection />
      <HowNoovioWork />
      <PricingSection />
      <FormSection form={form} onSubmit={onSubmit} />
    </>
  );
};

export default HomeScreen;
