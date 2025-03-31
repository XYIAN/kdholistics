"use client";

import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

const BackIconButton = () => {
  const router = useRouter();

  return (
    <Button
      icon="pi pi-arrow-left"
      style={{
        position: "fixed",
        top: "2rem",
        left: "2rem",
        zIndex: "999",
        padding: "5px",
        backgroundColor: "rgba(201, 96, 222, 0.18)",
        color: "rgba(240, 183, 250, 0.74)",
      }}
      onClick={() => router.push("/events")}
      label="Back to Events"
      text
      //outlined
    />
  );
};

export default BackIconButton;
