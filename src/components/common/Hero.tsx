"use client";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { Image } from "primereact/image";
import "@/styles/_hero.scss";
import { theme, commonStyles } from "@/styles/theme";

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
    <section className="hero-panel">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-screen-lg"
      >
        <Card className="text-center">
          <div className="flex flex-column align-items-center gap-4">
            <h1>{title}</h1>
            <p>{description}</p>

            {ctaLabel && (
              <Button
                label={ctaLabel}
                icon={ctaIcon}
                className="p-button-rounded p-button-lg p-button-outlined"
                onClick={onCtaClick}
                style={{
                  ...commonStyles.buttonBase,
                  padding: theme.components.button.padding.large,
                  fontSize: theme.components.button.fontSize.large,
                }}
              />
            )}

            {imageSrc && (
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="hero-image"
                width="250"
                preview
                imageClassName="border-circle"
              />
            )}
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default Hero;
