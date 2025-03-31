import { EventItem } from "@/types/events";
import { FaMoon, FaHandsHelping } from "react-icons/fa";

export const EVENTS_LIST: EventItem[] = [
  {
    eventId: "moon-circles",
    eventName: "Moon Circles",
    eventDescription:
      "Connect with lunar energy through guided ceremony, journaling, and authentic community sharing.",
    eventSlug: "moonCircles",
    eventIcon: <FaMoon />,
    linkToJoin: "/events/moonCircles",
    isUpcoming: true,
  },
  {
    eventId: "community-circles",
    eventName: "Community Circles",
    eventDescription:
      "Live Zoom gatherings focused on spiritual connection, intention setting, and wellness.",
    eventSlug: "communityCircles",
    eventIcon: <FaHandsHelping />,
    linkToJoin: "/events/communityCircles",
  },
];
