"use client";

import { EVENTS_LIST } from "@/constants/events";
import { motion } from "framer-motion";
import "@/styles/_eventsPage.scss";
import EventPreviewCard from "./EventpreviewCard";

const EventsPage = () => {
  return (
    <section className="events-wrapper min-h-screen p-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-6"
      >
        Upcoming Events & Ceremonies
      </motion.h1>

      <div className="grid grid-nogutter md:grid-cols-2 gap-4">
        {EVENTS_LIST.map((event) => (
          <EventPreviewCard key={event.eventId} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventsPage;
