"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

const CeremonyDetails = () => {
  const router = useRouter();

  const details = [
    {
      icon: "pi pi-calendar",
      title: "Next Ceremony",
      content: "Full Moon - April 23rd, 2024",
    },
    {
      icon: "pi pi-clock",
      title: "Duration",
      content: "2.5 Hours (7:00 PM - 9:30 PM PST)",
    },
    {
      icon: "pi pi-map-marker",
      title: "Location",
      content: "Sacred Space Studio, Portland OR",
    },
    {
      icon: "pi pi-users",
      title: "Group Size",
      content: "Limited to 12 participants",
    },
  ];

  const handleSchedule = () => {
    router.push("/contact");
  };

  return (
    <section className="mb-12">
      <Card className="moon-circle-card">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {details.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <i className={`${detail.icon} text-3xl text-purple-600`}></i>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{detail.title}</h3>
                  <p className="text-gray-600">{detail.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button
              label="Reserve Your Spot"
              icon="pi pi-calendar-plus"
              className="p-button-lg"
              onClick={handleSchedule}
            />
          </div>
        </motion.div>
      </Card>
    </section>
  );
};

export default CeremonyDetails;
