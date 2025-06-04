"use client";

import { ProgressSpinner } from "primereact/progressspinner";
import { useEffect, useState } from "react";
import "@/styles/_loadingScreen.scss";

const messages = [
  "Finding your center...",
  "Aligning your energy...",
  "Channeling positive vibes...",
  "Creating sacred space...",
  "Connecting with wellness...",
  "Manifesting tranquility...",
  "Balancing your chakras...",
];

export default function LoadingScreen() {
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="4"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
        <p className="loading-message">{message}</p>
      </div>
    </div>
  );
}
