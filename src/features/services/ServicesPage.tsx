"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "@/styles/_servicesPage.scss";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const services: ServiceItem[] = [
  {
    title: "Moon Circles",
    description:
      "Join our sacred moon circles for guided ceremonies and holistic healing.",
    icon: <i className="pi pi-moon" />,
    link: "/events/mooncircles",
  },
  {
    title: "Courses",
    description:
      "Access courses on holistic wellness, energy healing, and self-discovery.",
    icon: <i className="pi pi-book" />,
    link: "/courses",
  },
  {
    title: "One-on-One Services",
    description:
      "Schedule personalized consultations for Reiki, spiritual guidance, and more.",
    icon: <i className="pi pi-user" />,
    link: "/services/consultations",
  },
];

export const ServicesPage = () => {
  return (
    <section className="services-page">
      <motion.div
        className="services-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-title">Services &amp; Offerings</h1>
        <p className="hero-subtitle">
          Explore transformative offerings designed to nurture your holistic
          well-being.
        </p>
      </motion.div>
      <div className="services-list">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <Button
                label="Learn More"
                className="p-button-rounded p-button-outlined"
                onClick={() => window.location.assign(service.link)}
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
