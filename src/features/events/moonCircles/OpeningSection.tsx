"use client";

import { motion } from "framer-motion";
import "@/styles/_openingSection.scss";

const OpeningSection = () => {
  return (
    <section className="opening-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="opening-content"
      >
        <h2 className="opening-title">Opening the Circle</h2>
        <p className="opening-text">
          Welcome! Begin by introducing yourself and sharing your mission for
          Holistic Kas. <br />
          <em>
            Set the intention: &quot;This is a safe, non-judgmental space for
            self-discovery and connection.&quot;
          </em>
        </p>
        <div className="breath-instructions">
          Take three deep breaths and set your personal intention.
        </div>
        <div className="grounding-meditation">
          <strong>Grounding Meditation:</strong> Visualize roots grounding you
          to the earth while a warm, radiant light expands from your heart.
        </div>
      </motion.div>
    </section>
  );
};

export default OpeningSection;
