"use client";

import { ScrollPanel } from "primereact/scrollpanel";
import { motion } from "framer-motion";
import "@/styles/_moonCircles.scss";
import { MOON_PHASES } from "@/constants";

const MoonCircleScrollPreview = () => {
  return (
    <div className="moon-circle-scroll">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2>Moon Circle Journey</h2>
        <p>
          Experience a transformative journey through our carefully crafted moon
          circle phases. Each step is designed to deepen your connection with
          yourself and the lunar energy.
        </p>
      </motion.div>

      <ScrollPanel className="scroll-container">
        {MOON_PHASES.map((phase, index) => (
          <motion.div
            key={index}
            className="moon-circle-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            <div className="phase-number">{index + 1}</div>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>
          </motion.div>
        ))}
      </ScrollPanel>
    </div>
  );
};

export default MoonCircleScrollPreview;
