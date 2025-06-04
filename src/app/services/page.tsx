"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { theme } from "@/styles/theme";
import "@/styles/_servicesPage.scss";

const services = [
  {
    title: "Moon Circles",
    description:
      "Join our sacred moon circles for spiritual growth and connection",
    icon: "pi pi-moon",
    path: "mooncircles",
  },
  {
    title: "Energy Work",
    description: "Experience transformative Reiki and energy healing sessions",
    icon: "pi pi-sun",
    path: "energy-work",
  },
  {
    title: "Holistic Healing",
    description: "Comprehensive wellness approaches for mind-body balance",
    icon: "pi pi-heart-fill",
    path: "holistic-healing",
  },
  {
    title: "Wellness Coaching",
    description: "Personalized guidance for optimal health and well-being",
    icon: "pi pi-users",
    path: "wellness-coaching",
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <main className="services-container">
      <div className="animated-background"></div>

      <motion.section
        className="services-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Services</h1>
        <p>Discover our range of holistic wellness services</p>
      </motion.section>

      <section className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Button
                label="Learn More"
                text
                className="mt-3"
                style={{
                  color: theme.colors.primary.text,
                  fontSize: theme.typography.fontSizes.sm,
                }}
                onClick={() => router.push(`/services/${service.path}`)}
              />
            </Card>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
