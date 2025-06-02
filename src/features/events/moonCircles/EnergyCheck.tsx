"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Timeline } from "primereact/timeline";

interface CheckInStep {
  status: string;
  description: string;
  icon: string;
}

const EnergyCheck = () => {
  const checkInSteps: CheckInStep[] = [
    {
      status: "Centering",
      description: "Ground yourself through guided breath work and meditation.",
      icon: "pi pi-heart",
    },
    {
      status: "Body Scan",
      description:
        "Tune into your physical sensations and emotional landscape.",
      icon: "pi pi-user",
    },
    {
      status: "Energy Assessment",
      description:
        "Notice where you feel expansion or contraction in your body.",
      icon: "pi pi-sync",
    },
    {
      status: "Emotional Check-in",
      description: "Acknowledge and name your current emotional state.",
      icon: "pi pi-star",
    },
  ];

  const customizedMarker = (item: CheckInStep) => {
    return (
      <span className="flex w-10 h-10 items-center justify-center rounded-full bg-purple-100">
        <i className={`${item.icon} text-purple-600`}></i>
      </span>
    );
  };

  return (
    <section className="mb-12">
      <Card className="moon-circle-card">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Energy Check-in</h2>

          <p className="mb-8">
            This gentle practice helps us arrive fully in the present moment and
            connect with our inner landscape. Through mindful awareness, we
            create space to honor where we are in this moment.
          </p>

          <Timeline
            value={checkInSteps}
            align="alternate"
            className="w-full md:w-8/12 mx-auto"
            marker={customizedMarker}
            content={(item: CheckInStep) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-0"
              >
                <h3 className="text-xl font-medium mb-2">{item.status}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            )}
          />
        </motion.div>
      </Card>
    </section>
  );
};

export default EnergyCheck;
