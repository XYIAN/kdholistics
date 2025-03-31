"use client";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { EventItem } from "@/types/events";
import { useRouter } from "next/navigation";

interface Props {
  event: EventItem;
}

const EventPreviewCard = ({ event }: Props) => {
  const router = useRouter();

  return (
    <div className="event-card">
      <div className="sparkle-overlay" />
      <Card
        title={event.eventName}
        className="event-card-inner"
        header={
          <div className="text-4xl text-primary flex justify-content-center pt-3">
            {event.eventIcon}
          </div>
        }
      >
        <div className="event-card-content">
          <p className="mb-4">{event.eventDescription}</p>
          <Button
            label="Explore"
            icon="pi pi-arrow-right"
            onClick={() =>
              router.push(event.linkToJoin ?? `/events/${event.eventSlug}`)
            }
            className="p-button-rounded p-button-secondary"
          />
        </div>
      </Card>
    </div>
  );
};

export default EventPreviewCard;
