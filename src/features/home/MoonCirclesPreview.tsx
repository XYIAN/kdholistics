"use client";

import { Button } from "primereact/button";
import { motion } from "framer-motion";
import "@/styles/_moonCircles.scss";
import { theme, commonStyles } from "@/styles/theme";
import { useRouter } from "next/navigation";

const MoonCirclesPreview = () => {
  const router = useRouter();

  const handleSchedule = () => {
    router.push("/contact");
  };

  return (
    <section className="moon-circles-preview">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Upcoming Moon Circle</h2>
        <p>
          Join us for a night of lunar connection, intention setting, and
          healing under the full moon.
        </p>

        <div className="date-badge">
          <i className="pi pi-moon"></i>
          <span>Full Moon in Scorpio · April 23, 2025</span>
        </div>

        <div className="flex flex-column gap-3">
          <Button
            label="View Details"
            icon="pi pi-calendar"
            className="p-button-lg"
            style={{
              ...commonStyles.buttonBase,
              padding: theme.components.button.padding.large,
              fontSize: theme.components.button.fontSize.large,
            }}
            onClick={() => router.push("/events/mooncircles")}
          />
          <Button
            label="Save Your Spot"
            icon="pi pi-heart"
            className="p-button-lg"
            style={{
              ...commonStyles.buttonBase,
              background: "transparent",
              border: `2px solid ${theme.colors.primary.main}`,
              color: theme.colors.primary.text,
            }}
            onClick={handleSchedule}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default MoonCirclesPreview;
