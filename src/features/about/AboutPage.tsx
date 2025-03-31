"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import Image from "next/image";
import "@/styles/_aboutPage.scss";

const AboutPage = () => {
  return (
    <section className="about-page">
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="about-title">About Kas</h1>
        <p className="about-subtitle">
          Holistic Health Specialist | Doctor in Training | Empowering Authentic
          Self-Care
        </p>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <Card className="about-card">
          <div className="about-card-container">
            <div className="about-image">
              <Image
                src="/images/2.png"
                alt="Kas Profile"
                width={300}
                height={300}
                className="profile-image"
              />
            </div>
            <div className="about-text">
              <motion.div
                className="about-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <h2>My Journey</h2>
                <p>
                  My name is Kas, and I am a holistic health specialist
                  currently in medical school. I specialize in naturopathy,
                  Reiki, and CST.
                </p>
              </motion.div>
              <motion.div
                className="about-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <p>
                  My mission is to empower others to embrace their authentic
                  selves through holistic healing, education, and community.
                </p>
              </motion.div>
              <motion.div
                className="about-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <p>
                  I created Holistic Kas as a safe and supportive space where
                  individuals can grow spiritually and personally. With a
                  passion for both modern medicine and ancient healing
                  practices, I integrate my knowledge to guide you on a journey
                  of wellness and self-discovery.
                </p>
              </motion.div>
              <motion.div
                className="about-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              >
                <p>
                  Join me as we explore the transformative power of holistic
                  health and learn to embrace the natural flow of life, healing,
                  and spiritual growth.
                </p>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default AboutPage;
