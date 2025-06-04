"use client";

import { EVENTS_LIST } from "@/constants/events";
import { motion } from "framer-motion";
import "@/styles/_eventsPage.scss";
import EventPreviewCard from "./EventpreviewCard";
import { Card } from "primereact/card";
import { Event } from "@/types/events";

const EventsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="events-container">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="events-header">
          <h1>Sacred Gatherings & Ceremonies</h1>
          <p>
            Join us for transformative experiences that nurture your mind, body,
            and spirit. Each gathering is thoughtfully crafted to support your
            personal growth and spiritual journey.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="events-grid">
          {EVENTS_LIST.map((event: Event, index: number) => (
            <motion.div
              key={event.eventId}
              variants={itemVariants}
              custom={index}
            >
              <EventPreviewCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventsPage;
