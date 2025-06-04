"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@/styles/_servicePage.scss";

export default function WellnessCoachingPage() {
  const router = useRouter();

  const benefits = [
    "Personalized wellness strategy",
    "Sustainable lifestyle changes",
    "Increased self-awareness",
    "Better health habits",
    "Improved work-life balance",
    "Enhanced personal growth",
    "Greater life satisfaction",
  ];

  const approaches = [
    {
      title: "Holistic Assessment",
      description: "Comprehensive evaluation of your wellness needs and goals",
      icon: "pi pi-chart-line",
    },
    {
      title: "Custom Planning",
      description: "Tailored strategies for your unique wellness journey",
      icon: "pi pi-pencil",
    },
    {
      title: "Ongoing Support",
      description: "Regular check-ins and adjustments to your wellness plan",
      icon: "pi pi-users",
    },
    {
      title: "Progress Tracking",
      description: "Measuring and celebrating your wellness achievements",
      icon: "pi pi-chart-bar",
    },
  ];

  const description = `
Wellness coaching at Holistic Kas is a collaborative journey that empowers you to achieve your optimal health and well-being. Through personalized guidance and support, we help you develop sustainable lifestyle practices that align with your unique needs and goals.
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
            Wellness Coaching
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Achieve your wellness goals with personalized guidance and support
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
              <h2 className="text-2xl font-semibold mb-6">
                About Wellness Coaching
              </h2>
              <p className="text-lg leading-relaxed">{description}</p>
            </Card>
          </motion.section>

          <motion.section
            className="approaches-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>Our Approach</h2>
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
              <h2>Start Your Wellness Journey</h2>
              <p>
                Ready to transform your life? Schedule a consultation to begin
                your personalized wellness journey.
              </p>
              <Button
                label="Schedule a Consultation"
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
