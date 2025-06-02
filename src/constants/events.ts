import { Event } from "@/types/events";

const CALENDLY_URL = "http://calendly.com/holistickas";

export const EVENTS_LIST: Event[] = [
  {
    eventId: "moon-circle-april",
    title: "Full Moon Circle",
    date: "April 23rd, 2024",
    time: "7:00 PM - 9:30 PM PST",
    description:
      "Join us for a sacred gathering under the full moon. Experience deep connection, healing, and transformation through guided meditation, journaling, and sharing.",
    link: CALENDLY_URL,
  },
  {
    eventId: "sound-healing-may",
    title: "Sound Healing Journey",
    date: "May 15th, 2024",
    time: "6:30 PM - 8:30 PM PST",
    description:
      "Immerse yourself in the healing vibrations of crystal bowls, gongs, and sacred instruments. A deeply restorative experience for mind, body, and spirit.",
    link: CALENDLY_URL,
  },
  {
    eventId: "new-moon-may",
    title: "New Moon Ceremony",
    date: "May 8th, 2024",
    time: "7:00 PM - 9:00 PM PST",
    description:
      "Set powerful intentions and plant seeds for your future during this new moon ceremony. Includes guided visualization, ritual work, and community support.",
    link: CALENDLY_URL,
  },
  {
    eventId: "womens-circle-june",
    title: "Women's Sacred Circle",
    date: "June 1st, 2024",
    time: "2:00 PM - 5:00 PM PST",
    description:
      "A nurturing space for women to gather, share, and support one another. Experience the power of sisterhood through ritual, movement, and authentic connection.",
    link: CALENDLY_URL,
  },
];
