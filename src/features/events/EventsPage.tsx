"use client";

import { motion } from "framer-motion";
import { Event } from "@/types/events";
import EventPreviewCard from "./EventpreviewCard";
import "@/styles/_eventsPage.scss";
import { Suspense } from "react";

interface EventsPageProps {
  events: Event[];
}

const EventsPageContent = ({ events }: EventsPageProps) => {
  return (
    <main className="events-container">
      <motion.section
        className="events-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Upcoming Events</h1>
        <p>Join our transformative gatherings and ceremonies</p>
      </motion.section>

      <motion.div
        className="events-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {events.map((event, index) => (
          <motion.div
            key={event.id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <EventPreviewCard event={event} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

const EventsPage = ({ events }: EventsPageProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventsPageContent events={events} />
    </Suspense>
  );
};

export default EventsPage;
