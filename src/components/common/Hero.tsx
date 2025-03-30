"use client";

import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { Image } from "primereact/image";
import "@/styles/_hero.scss";
type HeroProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaIcon?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
};

const Hero = ({
  title,
  description,
  ctaLabel = "Learn More",
  ctaIcon = "pi pi-arrow-right",
  onCtaClick,
  imageSrc,
  imageAlt = "Hero Image",
}: HeroProps) => {
  return (
    <section className="hero-panel p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-column align-items-center text-center gap-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="text-lg md:text-xl max-w-30rem">{description}</p>

        {ctaLabel && (
          <Button
            label={ctaLabel}
            icon={ctaIcon}
            className="p-button-rounded p-button-lg p-button-outlined"
            onClick={onCtaClick}
          />
        )}

        {imageSrc && (
          <div className="hero-image border-circle overflow-hidden mt-4">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-10rem h-10rem md:w-14rem md:h-14rem object-cover"
            />
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
