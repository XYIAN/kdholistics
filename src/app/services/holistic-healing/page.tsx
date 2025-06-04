"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@/styles/_servicePage.scss";

export default function HolisticHealingPage() {
  const router = useRouter();

  const benefits = [
    "Comprehensive wellness assessment",
    "Natural healing techniques",
    "Stress reduction and management",
    "Improved sleep quality",
    "Enhanced immune function",
    "Better digestive health",
    "Emotional balance and clarity",
  ];

  const approaches = [
    {
      title: "Natural Remedies",
      description: "Using nature's healing power for optimal wellness",
      icon: "pi pi-leaf",
    },
    {
      title: "Mind-Body Connection",
      description: "Integrating mental and physical well-being",
      icon: "pi pi-heart",
    },
    {
      title: "Energy Balance",
      description: "Harmonizing your body's energy systems",
      icon: "pi pi-sun",
    },
    {
      title: "Lifestyle Support",
      description: "Creating sustainable healthy habits",
      icon: "pi pi-compass",
    },
  ];

  const description = `
At Holistic Kas, we embrace a comprehensive approach to healing that addresses the physical, emotional, mental, and spiritual aspects of well-being. Our holistic healing services are designed to support your body's natural healing abilities while promoting balance and harmony in all areas of your life.
`;

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
            Holistic Healing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Experience comprehensive wellness through natural healing practices
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
                  About Holistic Healing
                </h2>
                <p className="mb-4 text-lg leading-relaxed">{description}</p>
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
              Our Approaches
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
                  Begin Your Healing Journey
                </h2>
                <p className="text-lg mb-6">
                  Ready to experience holistic healing? Schedule a consultation
                  to start your wellness journey.
                </p>
                <Button
                  label="Schedule a Consultation"
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
