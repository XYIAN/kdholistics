"use client";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { FaMoon } from "react-icons/fa";
import "@/styles/_moonCirclesPreview.scss";

const MoonCirclesPreview = () => {
  return (
    <section className="moon-circles-panel">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="moon-circles-wrapper"
      >
        <Card className="p-card-moon text-center shadow-6">
          <div className="animated-moon">
            <FaMoon />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Upcoming Moon Circle
          </h2>
          <p className="text-base md:text-lg mb-4">
            Join us for a night of lunar connection, intention setting, and
            healing under the full moon.
          </p>

          <div className="text-sm mb-3">
            🌕 Full Moon in Scorpio · April 23, 2025
          </div>

          <Button
            label="View Details"
            icon="pi pi-calendar"
            className="p-button-rounded p-button-lg p-button-secondary"
            onClick={() => console.log("Moon Circle clicked")}
          />
        </Card>
      </motion.div>
    </section>
  );
};

export default MoonCirclesPreview;
