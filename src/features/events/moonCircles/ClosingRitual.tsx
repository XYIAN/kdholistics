"use client";

import { motion } from "framer-motion";
import "@/styles/_closingRitual.scss";

const ClosingRitual = () => {
  return (
    <motion.section
      className="closing-ritual-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Closing Ritual</h2>
      <p className="section-description">
        As we conclude our circle, let us share gratitude and affirmations.
      </p>
      <div className="ritual-steps">
        <div className="ritual-step">
          <strong>Gratitude & Affirmation:</strong> Each person shares one word
          or affirmation to carry forward.
        </div>
        <div className="ritual-step">
          <strong>Collective Breathwork or Candle Ritual:</strong> Together, we
          take a deep breath or gently blow out a candle.
        </div>
      </div>
      <p className="closing-note">
        Stay connected through our email list and social channels for future
        circles.
      </p>
    </motion.section>
  );
};

export default ClosingRitual;
