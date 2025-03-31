"use client";

import { motion } from "framer-motion";
import { FaMoon } from "react-icons/fa";
import "@/styles/_moonCirclesPage.scss";

export const MoonCirclesPage = () => {
  return (
    <section className="moon-circles-full-page">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="moon-circles-hero"
      >
        <div className="moon-icon">
          <FaMoon />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
          Moon Circles
        </h1>
        <p className="text-lg md:text-xl text-white text-center max-w-2xl">
          A sacred space for connection, reflection, and lunar alignment.
        </p>
      </motion.div>
    </section>
  );
};
