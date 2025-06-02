"use client";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { Event } from "@/types/events";
import { theme, commonStyles } from "@/styles/theme";

interface EventPreviewCardProps {
  event: Event;
}

const EventPreviewCard = ({ event }: EventPreviewCardProps) => {
  const handleSchedule = () => {
    window.open(event.link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      className="event-card-inner"
      style={{
        ...commonStyles.cardBase,
        padding: theme.components.card.padding.default,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-full flex flex-col"
      >
        <div className="flex-grow">
          <div
            className="event-date-badge"
            style={{
              background: theme.colors.gradients.button,
              borderRadius: theme.borderRadius.md,
              padding: theme.spacing.xs + " " + theme.spacing.md,
              gap: theme.spacing.xs,
            }}
          >
            <i className="pi pi-calendar"></i>
            <span>{event.date}</span>
          </div>

          <h3
            className="text-2xl font-semibold mb-4"
            style={{
              color: theme.colors.primary.text,
              marginBottom: theme.spacing.md,
              fontSize: theme.typography.fontSizes.md,
              fontWeight: theme.typography.fontWeights.semibold,
            }}
          >
            {event.title}
          </h3>

          <div
            className="event-time"
            style={{
              color: theme.colors.primary.text,
              fontSize: theme.typography.fontSizes.xs,
              gap: theme.spacing.xs,
              marginBottom: theme.spacing.md,
            }}
          >
            <i className="pi pi-clock"></i>
            <span>{event.time}</span>
          </div>

          <p
            className="mb-6 leading-relaxed"
            style={{
              color: theme.colors.primary.textDark,
              marginBottom: theme.spacing.xl,
              lineHeight: theme.typography.lineHeights.relaxed,
            }}
          >
            {event.description}
          </p>
        </div>

        <div className="flex justify-center mt-4">
          <Button
            label="Schedule Now"
            icon="pi pi-calendar-plus"
            className="schedule-button"
            style={{
              ...commonStyles.buttonBase,
            }}
            onClick={handleSchedule}
          />
        </div>

        <div
          className="sparkle-overlay"
          style={{
            backgroundImage: `radial-gradient(circle, ${theme.colors.effects.sparkleLight} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            opacity: 0.3,
            mixBlendMode: "overlay",
          }}
        />
      </motion.div>
    </Card>
  );
};

export default EventPreviewCard;
