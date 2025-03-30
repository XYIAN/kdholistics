"use client";

import { ScrollPanel } from "primereact/scrollpanel";
import { Card } from "primereact/card";
import { motion } from "framer-motion";
import "@/styles/_moonCircleScrollPreview.scss";
import { MOON_PHASES } from "@/constants";

const MoonCircleScrollPreview = () => {
  return (
    <div className="moon-scroll-wrapper min-h-screen flex align-items-center justify-content-center">
      <section className="moon-scroll-panel w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-center mb-4"
        >
          Moon Circle Journey 🌙
        </motion.h2>

        <ScrollPanel style={{ width: "100%", height: "auto" }}>
          <div className="moon-scroll-items">
            {MOON_PHASES.map((phase, index) => (
              <motion.div
                key={index}
                className="moon-phase-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card title={phase.title} className="moon-phase-card-inner">
                  <p className="text-sm md:text-base">{phase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollPanel>
      </section>
    </div>
  );
};

export default MoonCircleScrollPreview;
