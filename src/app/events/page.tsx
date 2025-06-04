"use client";

import { motion } from "framer-motion";
import EventPreviewCard from "@/features/events/EventpreviewCard";
import { Event } from "@/types/events";
import "@/styles/_eventsPage.scss";

const events: Event[] = [
  {
    id: 1,
    title: "Full Moon Circle",
    date: "April 23, 2024",
    time: "7:00 PM - 9:00 PM PST",
    description:
      "Join us for a powerful Full Moon Circle where we'll harness the moon's energy for manifestation and release.",
    link: "https://calendly.com/holistickas/full-moon-circle",
  },
  {
    id: 2,
    title: "New Moon Intention Setting",
    date: "May 8, 2024",
    time: "6:30 PM - 8:30 PM PST",
    description:
      "Set powerful intentions for the lunar cycle ahead in this guided New Moon ceremony.",
    link: "https://calendly.com/holistickas/new-moon-circle",
  },
  {
    id: 3,
    title: "Spring Equinox Celebration",
    date: "March 20, 2024",
    time: "5:00 PM - 7:00 PM PST",
    description:
      "Welcome the spring season with a special ceremony celebrating renewal and growth.",
    link: "https://calendly.com/holistickas/spring-equinox",
  },
];

const EventsPage = () => {
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
            key={event.id}
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

export default EventsPage;
