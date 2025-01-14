export type EventModel = {
  name: string;
  title: string;
  description: string;
  url?: string;
  type: "in-person" | "online" | "other";
  id: number;
};
