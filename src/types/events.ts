import { ReactNode } from "react";

export type EventModel = {
  name: string;
  title: string;
  description: string;
  url?: string;
  type: "in-person" | "online" | "other";
  id: number;
  extraDetails?: string | ReactNode;
};

export interface EventItem {
  eventId: string;
  eventName: string;
  eventDescription: string;
  eventSlug: string; // for linking to detail page
  eventIcon?: ReactNode;
  linkToJoin?: string;
  date?: string;
  time?: string;
  location?: string;
  isUpcoming?: boolean;
}
