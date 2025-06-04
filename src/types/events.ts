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

export interface Event {
  id?: number;
  eventId?: string;
  title: string;
  date: string;
  time: string;
  description: string;
  link: string;
}

export interface EventItem {
  eventId: string;
  eventName: string;
  eventDescription: string;
  eventIcon: string;
  eventSlug: string;
  linkToJoin?: string;
}
