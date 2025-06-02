"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

interface Resource {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const PostCircleEngagement = () => {
  const resources: Resource[] = [
    {
      title: "Moon Phase Calendar",
      description:
        "Stay aligned with lunar cycles and plan your personal rituals.",
      icon: "pi pi-calendar",
      link: "/resources/moon-calendar",
    },
    {
      title: "Journaling Prompts",
      description:
        "Continue your reflection journey with daily prompts and guidance.",
      icon: "pi pi-book",
      link: "/resources/journaling",
    },
    {
      title: "Community Forum",
      description:
        "Connect with fellow participants and share your ongoing journey.",
      icon: "pi pi-users",
      link: "/community",
    },
    {
      title: "Upcoming Events",
      description: "Discover and register for future ceremonies and workshops.",
      icon: "pi pi-calendar-plus",
      link: "/events",
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
          <h2 className="text-2xl font-semibold mb-6">Continue Your Journey</h2>

          <p className="mb-8">
            The energy and insights from our moon circle continue to unfold long
            after we part. Here are some ways to stay connected and deepen your
            practice:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="flex w-12 h-12 items-center justify-center rounded-full bg-purple-100">
                    <i
                      className={`${resource.icon} text-2xl text-purple-600`}
                    ></i>
                  </span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <Button
                      label="Explore"
                      icon="pi pi-arrow-right"
                      className="p-button-text"
                      onClick={() => (window.location.href = resource.link)}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-purple-50 rounded-lg p-8">
            <h3 className="text-xl font-medium mb-4">Stay Connected</h3>
            <p className="text-gray-600 mb-6">
              Join our newsletter to receive monthly moon wisdom, ritual
              suggestions, and exclusive invitations to upcoming ceremonies.
            </p>
            <Button
              label="Subscribe to Moon Letters"
              icon="pi pi-envelope"
              className="p-button-rounded"
              style={{
                background: "linear-gradient(135deg, #9b4dca 0%, #6b3fa0 100%)",
                border: "none",
              }}
            />
          </div>
        </motion.div>
      </Card>
    </section>
  );
};

export default PostCircleEngagement;
