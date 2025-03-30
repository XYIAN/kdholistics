"use client";

import Hero from "@/components/common/Hero";
import { WRAPPER_STYLE_DEFAULT } from "@/constants/WRAPPER_STYLE_DEFAULT";

export default function Home() {
  return (
    <div className={WRAPPER_STYLE_DEFAULT}>
      <Hero
        title="Welcome to Holistic Kas"
        description="A space for personal and spiritual growth through holistic healing, education, and community."
        ctaLabel="Join the Journey"
        ctaIcon="pi pi-heart"
        imageSrc="../../public/images/lotus_grey.png"
        imageAlt="Kas Profile"
        onCtaClick={() => console.log("CTA clicked")}
      />
    </div>
  );
}
