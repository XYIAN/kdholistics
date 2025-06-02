"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import Image from "next/image";
import "@/styles/_aboutPage.scss";

const AboutPage = () => {
  const sections = [
    {
      title: "My Journey",
      content:
        "My name is Kas, and I am a holistic health specialist currently in medical school. I specialize in naturopathy, Reiki, and CST.",
      icon: "pi pi-heart",
      color: "var(--color-primary-main)",
    },
    {
      title: "My Mission",
      content:
        "My mission is to empower others to embrace their authentic selves through holistic healing, education, and community.",
      icon: "pi pi-compass",
      color: "#b08968",
    },
    {
      title: "Holistic Kas",
      content:
        "I created Holistic Kas as a safe and supportive space where individuals can grow spiritually and personally. With a passion for both modern medicine and ancient healing practices, I integrate my knowledge to guide you on a journey of wellness and self-discovery.",
      icon: "pi pi-globe",
      color: "#8b5e34",
    },
    {
      title: "Join Me",
      content:
        "Join me as we explore the transformative power of holistic health and learn to embrace the natural flow of life, healing, and spiritual growth.",
      icon: "pi pi-users",
      color: "#6b4423",
    },
  ];

  return (
    <main className="about-container">
      <div className="animated-background"></div>

      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>About Kas</h1>
        <p>
          Holistic Health Specialist | Doctor in Training | Empowering Authentic
          Self-Care
        </p>
      </motion.section>

      <section className="about-content">
        <motion.div
          className="profile-section"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="profile-card">
            <div className="profile-image-wrapper">
              <Image
                src="/images/hk-bg-lg.png"
                alt="KD Holistics Background"
                width={300}
                height={300}
                className="profile-image"
              />
            </div>
          </Card>
        </motion.div>

        <div className="sections-grid">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="section-card">
                <div className="section-content">
                  <div
                    className="icon-circle"
                    style={{ backgroundColor: section.color }}
                  >
                    <i className={section.icon}></i>
                  </div>
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
