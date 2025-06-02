"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

interface SharingGuideline {
  title: string;
  description: string;
  icon: string;
}

const CommunitySharing = () => {
  const sharingGuidelines: SharingGuideline[] = [
    {
      title: "Speak from the Heart",
      description:
        "Share authentically and vulnerably, allowing your truth to emerge naturally.",
      icon: "pi pi-heart-fill",
    },
    {
      title: "Listen with Presence",
      description:
        "Offer your full attention and hold space without judgment or advice-giving.",
      icon: "pi pi-volume-up",
    },
    {
      title: "Honor Confidentiality",
      description:
        "What is shared in the circle stays in the circle, creating a safe container for all.",
      icon: "pi pi-lock",
    },
    {
      title: "Practice Compassion",
      description:
        "Approach yourself and others with gentleness, understanding, and acceptance.",
      icon: "pi pi-heart",
    },
  ];

  return (
    <section className="mb-12">
      <Card className="moon-circle-card">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Community Sharing</h2>

          <p className="mb-8">
            The sharing circle is a sacred space where we come together to
            witness and support one another. Through mindful sharing and
            listening, we strengthen our connections and honor our collective
            wisdom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sharingGuidelines.map((guideline, index) => (
              <motion.div
                key={guideline.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <span className="flex w-12 h-12 items-center justify-center rounded-full bg-purple-100">
                    <i
                      className={`${guideline.icon} text-2xl text-purple-600`}
                    ></i>
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    {guideline.title}
                  </h3>
                  <p className="text-gray-600">{guideline.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Divider className="my-8" />

          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">Sharing Format</h3>
            <p className="text-gray-600">
              Each person will have sacred time to share their reflections,
              insights, or experiences. There is no pressure to share - you may
              pass if you wish to simply hold space for others. We use a talking
              piece to ensure each voice is heard fully.
            </p>
          </div>
        </motion.div>
      </Card>
    </section>
  );
};

export default CommunitySharing;
