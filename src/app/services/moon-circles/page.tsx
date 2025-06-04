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

  return (
    <main className="service-page">
      <div className="bg-overlay"></div>
      <Image
        src="/images/hk-bg-lg2.png"
        alt="Background"
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
          >
            Moon Circles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
            <Card>
              <h2>About Moon Circles</h2>
              <p>
                Moon Circles at KD Holistics are sacred gatherings that honor
                the lunar cycles and their influence on our well-being. These
                monthly ceremonies create a space for intention setting,
                releasing, and collective healing in alignment with the
                moon&apos;s phases.
              </p>
              <p>
                Each circle combines meditation, ritual, sharing, and energy
                work to create a powerful container for transformation and
                community connection.
              </p>
            </Card>
          </motion.section>

          <motion.section
            className="approaches-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>Circle Elements</h2>
            <div className="approaches-grid">
              {approaches.map((approach, index) => (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="approach-card">
                    <div className="approach-content">
                      <i className={approach.icon}></i>
                      <h3>{approach.title}</h3>
                      <p>{approach.description}</p>
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
            <Card>
              <h2>Benefits</h2>
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="benefit-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <i className="pi pi-check-circle"></i>
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.section>

          <motion.section
            className="cta-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Card>
              <h2>Join Our Next Circle</h2>
              <p>
                Ready to experience the magic of Moon Circles? Reserve your
                space for our next gathering.
              </p>
              <Button
                label="Reserve Your Space"
                icon="pi pi-calendar"
                onClick={() => router.push("/contact")}
                className="p-button-lg"
              />
            </Card>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
}
