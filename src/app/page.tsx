"use client";

import Hero from "@/components/common/Hero";
import HeroImage from "../../public/images/lotus_grey.png";
import EmailSignup from "@/features/home/EmailSignup";
import MoonCirclesPreview from "@/features/home/MoonCirclesPreview";
export default function Home() {
  return (
    <div>
      <Hero
        title="Welcome to Holistic Kas"
        description="A space for personal and spiritual growth through holistic healing, education, and community."
        ctaLabel="Join the Journey"
        ctaIcon="pi pi-heart"
        imageSrc={HeroImage.src}
        imageAlt="Kas Profile"
        onCtaClick={() => console.log("CTA clicked")}
      />
      <EmailSignup />
      <MoonCirclesPreview />
    </div>
  );
}
