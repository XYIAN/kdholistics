"use client";
import { EventModel } from "@/types";
import { Card } from "primereact/card";
import React from "react";

export interface EventItemProps {
  event: EventModel;
}
const EventItem = ({ event }: EventItemProps) => {
  const { name, title, description, url, type } = event;

  const headerByType = () => {
    switch (type) {
      case "in-person":
        return <div></div>;
      case "online":
        return <div></div>;
      case "other":
        return <div> </div>;
    }
  };

  const footerByType = () => {
    switch (type) {
      case "in-person":
        return <div></div>;
      case "online":
        return <div></div>;
      case "other":
        return <div> </div>;
      default:
        return <div></div>;
    }
  };
  //TODO resize mobile first design class name
  return (
    <Card
      title={title}
      header={headerByType}
      footer={footerByType}
      className=""
    >
      <h4>{name}</h4>
      <p>{description}</p>
      <a href={url} className="underline bold cursor-pointer">
        Book now
      </a>
    </Card>
  );
};

export default EventItem;
