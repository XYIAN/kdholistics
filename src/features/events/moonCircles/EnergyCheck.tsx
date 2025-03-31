"use client";

import { motion } from "framer-motion";
import "@/styles/_energyCheck.scss";

const EnergyCheck = () => {
  return (
    <motion.section
      className="energy-check-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Moon Energy & Collective Check-In</h2>
      <p className="section-description">
        Share insights on the current moon phase, zodiac sign, and energy
        influences.
      </p>
      <ul className="checkin-questions">
        <li>How does this moon phase feel for you?</li>
        <li>What is something you want to release or embrace?</li>
      </ul>
      <p className="optional-text">
        Optional: Pull an oracle or tarot card and reflect on its message.
      </p>
    </motion.section>
  );
};

export default EnergyCheck;
