"use client";

import { Suspense } from "react";
import EventsPage from "@/features/events/EventsPage";
import { EVENTS_LIST } from "@/constants/events";

const EventsContent = () => {
  return <EventsPage events={EVENTS_LIST} />;
};

export default function Events() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventsContent />
    </Suspense>
  );
}
