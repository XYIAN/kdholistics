"use client";

import { motion } from "framer-motion";
import "@/styles/_journalingReflection.scss";

const JournalingReflection = () => {
  return (
    <motion.section
      className="journaling-reflection-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Journaling & Reflection</h2>
      <p className="section-description">
        Guided prompts to encourage introspection:
      </p>
      <ul className="reflection-prompts">
        <li>Where in my life am I holding back my authentic self?</li>
        <li>
          What would it feel like to step into full openness and acceptance?
        </li>
        <li>What patterns or beliefs can I release under this moon phase?</li>
      </ul>
      <p className="journaling-instruction">
        Take 5–7 minutes for quiet journaling, followed by optional sharing.
      </p>
    </motion.section>
  );
};

export default JournalingReflection;
