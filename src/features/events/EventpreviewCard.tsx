"use client";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { Event } from "@/types/events";
import { theme } from "@/styles/theme";

interface EventPreviewCardProps {
  event: Event;
}

const EventPreviewCard = ({ event }: EventPreviewCardProps) => {
  const handleSchedule = () => {
    window.open(event.link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      className="event-card"
      pt={{
        root: { className: "event-card-root" },
        content: { className: "event-content" },
      }}
      style={{
        background: "transparent",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-full flex flex-col"
      >
        <div className="flex-grow">
          <div className="event-date">
            <i className="pi pi-calendar"></i>
            <span>{event.date}</span>
          </div>

          <h2>{event.title}</h2>

          <div className="event-time">
            <i className="pi pi-clock"></i>
            <span>{event.time}</span>
          </div>

          <p>{event.description}</p>
        </div>

        <div className="flex justify-center mt-4">
          <Button
            label="Schedule Now"
            icon="pi pi-calendar-plus"
            className="schedule-button"
            style={{
              background: theme.colors.gradients.button,
              border: "none",
              padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
              borderRadius: theme.borderRadius.md,
              color: theme.colors.primary.text,
              fontSize: theme.typography.fontSizes.sm,
              transition: "all 0.3s ease",
            }}
            onClick={handleSchedule}
          />
        </div>
      </motion.div>
    </Card>
  );
};

export default EventPreviewCard;
