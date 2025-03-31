import { EventModel } from "@/types";
import { EventItem } from "@/types/events";
import { FaMoon, FaHandsHelping } from "react-icons/fa";

export const EVENT_LIST: EventModel[] = [
  {
    name: "Example Event",
    title: "This is an Example One",
    description: "blah blah blah blah blah blah blah ",
    type: "in-person",
    id: 0,
  },
  {
    name: "Example Event two",
    title: "This is an Example two",
    description: "blah blah blah blah blah blah blah ",
    type: "online",
    id: 2,
  },
  {
    name: "Example Event Three",
    title: "This is an Example three",
    description: "blah blah blah blah blah blah blah ",
    type: "other",
    id: 1,
  },
];

export const EVENTS_LIST: EventItem[] = [
  {
    eventId: "moon-circles",
    eventName: "Moon Circles",
    eventDescription:
      "Connect with lunar energy through guided ceremony, journaling, and authentic community sharing.",
    eventSlug: "mooncircles",
    eventIcon: <FaMoon />,
    linkToJoin: "/events/mooncircles",
    isUpcoming: true,
  },
  {
    eventId: "community-circles",
    eventName: "Community Circles",
    eventDescription:
      "Live Zoom gatherings focused on spiritual connection, intention setting, and wellness.",
    eventSlug: "communitycircles",
    eventIcon: <FaHandsHelping />,
    linkToJoin: "/events/communitycircles",
  },
];
