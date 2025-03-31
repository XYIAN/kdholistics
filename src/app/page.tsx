"use client";

import Hero from "@/components/common/Hero";
import HeroImage from "../../public/images/2.png";
import EmailSignup from "@/features/home/EmailSignup";
import MoonCirclesPreview from "@/features/home/MoonCirclesPreview";
import MoonCircleScrollPreview from "@/features/home/MoonCircleScrollPreview";
import "@/styles/_homePage.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigateClick = (to: string) => {
    router.push(`/${to}`);
  };

  return (
    <div className="home-container">
      {/* Animated background layer */}
      <div className="animated-background"></div>
      <Hero
        title="Welcome to Holistic Kas"
        description="A space for personal and spiritual growth through holistic healing, education, and community."
        ctaLabel="Join the Journey"
        ctaIcon="pi pi-heart"
        imageSrc={HeroImage.src}
        imageAlt="Kas Profile"
        onCtaClick={() => handleNavigateClick("social")}
      />
      <EmailSignup />
      <MoonCirclesPreview />
      <MoonCircleScrollPreview />
    </div>
  );
}
