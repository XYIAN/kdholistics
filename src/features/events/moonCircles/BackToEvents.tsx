"use client";

import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const BackIconButton = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        icon="pi pi-arrow-left"
        onClick={() => router.push("/events")}
        className="back-button"
        aria-label="Back to Events"
        tooltip="Back to Events"
        tooltipOptions={{ position: "right" }}
      />
    </motion.div>
  );
};

export default BackIconButton;
