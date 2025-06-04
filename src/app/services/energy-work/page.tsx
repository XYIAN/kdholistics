"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@/styles/_servicePage.scss";

export default function EnergyWorkPage() {
  const router = useRouter();

  const benefits = [
    "Deep relaxation and stress relief",
    "Emotional healing and balance",
    "Enhanced energy flow",
    "Chakra balancing and alignment",
    "Relief from physical discomfort",
    "Improved mental clarity",
    "Greater sense of well-being",
  ];

  const approaches = [
    {
      title: "Reiki Healing",
      description:
        "Traditional Japanese energy healing for balance and wellness",
      icon: "pi pi-heart",
    },
    {
      title: "Chakra Balancing",
      description: "Aligning and harmonizing your body&apos;s energy centers",
      icon: "pi pi-circle",
    },
    {
      title: "Aura Cleansing",
      description: "Purifying and strengthening your energetic field",
      icon: "pi pi-star",
    },
    {
      title: "Distance Healing",
      description: "Remote energy work for healing anywhere",
      icon: "pi pi-globe",
    },
  ];

  const description = `
Energy work at Holistic Kas focuses on restoring and maintaining your body's natural energy flow. Through various modalities including Reiki, chakra balancing, and energy healing, we help clear blockages and promote harmony in your energetic system.
`;

  return (
    <main className="service-page" style={{ background: "transparent" }}>
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
        style={{ background: "transparent" }}
      >
        <div className="service-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Energy Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Restore balance and vitality through powerful energy healing
            practices
          </motion.p>
        </div>

        <div className="service-content">
          <motion.section
            className="intro-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">About Energy Work</h2>
              <p className="text-lg leading-relaxed">{description}</p>
            </Card>
          </motion.section>

          <motion.section
            className="approaches-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>Our Approaches</h2>
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
            <Card className="p-8 mb-8">
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
                    <i className="pi pi-check-circle mr-4"></i>
                    <span className="text-lg">{benefit}</span>
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
              <h2>Experience Energy Healing</h2>
              <p>
                Ready to restore your energy balance? Book a session to begin
                your healing journey.
              </p>
              <Button
                label="Schedule a Session"
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
