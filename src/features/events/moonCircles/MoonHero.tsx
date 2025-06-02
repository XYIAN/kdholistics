"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MoonHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center mb-12"
    >
      <div className="relative mb-8">
        <Image
          src="/images/moon-circle.webp"
          alt="Moon Circle Ceremony"
          width={200}
          height={200}
          className="mx-auto rounded-full shadow-lg"
          priority
        />
        <div className="moon-phase-decoration top-right" />
      </div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Moon Circle Ceremonies
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg md:text-xl max-w-3xl mx-auto"
      >
        Join us for a sacred gathering where we honor the lunar cycles, connect
        with our inner wisdom, and share in the collective energy of community
        healing and transformation.
      </motion.p>
    </motion.div>
  );
};

export default MoonHero;
