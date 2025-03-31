"use client";

import { motion } from "framer-motion";
import "@/styles/_ceremonyDetails.scss";

const CeremonyDetails = () => {
  return (
    <motion.div
      className="moon-circle-details"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
        Ceremony Overview
      </h2>
      <ul className="moon-details-list text-white text-lg leading-relaxed text-center max-w-xl mx-auto">
        <li>
          <strong>🕒 Duration:</strong> 60–90 minutes
        </li>
        <li>
          <strong>📍 Format:</strong> Live (Zoom or in-person)
        </li>
        <li>
          <strong>🕯️ Materials Needed:</strong> Journal, candle, and a
          comfortable space
        </li>
      </ul>
    </motion.div>
  );
};

export default CeremonyDetails;
