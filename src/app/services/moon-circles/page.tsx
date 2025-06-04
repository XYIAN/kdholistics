"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@/styles/_servicePage.scss";

export default function MoonCirclesPage() {
  const router = useRouter();

  const benefits = [
    "Deep spiritual connection",
    "Community support and healing",
    "Monthly intention setting",
    "Enhanced self-discovery",
    "Lunar cycle awareness",
    "Sacred space experience",
    "Personal transformation",
  ];

  const approaches = [
    {
      title: "Lunar Meditation",
      description: "Guided meditations aligned with moon phases",
      icon: "pi pi-moon",
    },
    {
      title: "Sacred Rituals",
      description: "Traditional ceremonies for healing and manifestation",
      icon: "pi pi-star",
    },
    {
      title: "Group Sharing",
      description: "Safe space for community connection and support",
      icon: "pi pi-users",
    },
    {
      title: "Energy Work",
      description: "Collective healing amplified by lunar energy",
      icon: "pi pi-heart",
    },
  ];

  const description = `
Moon Circles at Holistic Kas are sacred gatherings that honor the lunar cycles and their influence on our lives. These intimate ceremonies provide a space for connection, reflection, and intentional manifestation work.
`;

  return (
    <main className="service-page">
      <div className="bg-overlay"></div>
      <Image
        src="/images/star-bg1.jpg"
        alt="Moon Circles Background"
        fill
        className="background-image"
        priority
      />

      <motion.div
        className="content-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="service-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-semibold mb-4"
          >
            Moon Circles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl"
          >
            Connect with lunar wisdom and community in sacred gathering spaces
          </motion.p>
        </div>

        <div className="service-content">
          <motion.section
            className="intro-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-4">
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4">
                  About Moon Circles
                </h2>
                <p className="mb-4 text-lg leading-relaxed">{description}</p>
                <p className="text-lg leading-relaxed">
                  Each circle combines meditation, ritual, sharing, and energy
                  work to create a powerful container for transformation and
                  community connection.
                </p>
              </div>
            </Card>
          </motion.section>

          <motion.section
            className="approaches-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Circle Elements
            </h2>
            <div className="approaches-grid">
              {approaches.map((approach, index) => (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="approach-card p-4">
                    <div className="approach-content">
                      <i className={approach.icon}></i>
                      <h3 className="text-xl font-semibold mb-3">
                        {approach.title}
                      </h3>
                      <p className="text-base">{approach.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="benefits-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="p-4">
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
                <div className="benefits-grid">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="benefit-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <i className="pi pi-check-circle mr-3"></i>
                      <span className="text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.section>

          <motion.section
            className="cta-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Card className="p-4">
              <div className="p-4 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Join Our Next Circle
                </h2>
                <p className="text-lg mb-6">
                  Ready to experience the magic of Moon Circles? Reserve your
                  space for our next gathering.
                </p>
                <Button
                  label="Reserve Your Space"
                  icon="pi pi-calendar"
                  onClick={() => router.push("/contact")}
                  className="p-button-lg"
                />
              </div>
            </Card>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
}
