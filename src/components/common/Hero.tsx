"use client";

import { Card } from "primereact/card";
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
    <section className="hero-panel flex align-items-center justify-content-center p-3">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-screen-lg"
      >
        <Card className="text-center p-4 surface-card shadow-2 border-round-lg">
          <div className="flex flex-column align-items-center gap-4">
            <h1 className="text-3xl md:text-5xl font-bold line-height-3">
              {title}
            </h1>
            <p className="text-lg md:text-xl max-w-30rem line-height-3">
              {description}
            </p>

            {ctaLabel && (
              <Button
                label={ctaLabel}
                icon={ctaIcon}
                className="p-button-rounded p-button-lg p-button-outlined"
                onClick={onCtaClick}
              />
            )}

            {imageSrc && (
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="hero-image border-circle shadow-4"
                width="250"
                preview
              />
            )}
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default Hero;
