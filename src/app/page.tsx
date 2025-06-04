"use client";

import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
// import Hero from "@/components/common/Hero";
// import HeroImage from "../../public/images/2.png";
// import EmailSignup from "@/features/home/EmailSignup";
// import MoonCirclesPreview from "@/features/home/MoonCirclesPreview";
// import MoonCircleScrollPreview from "@/features/home/MoonCircleScrollPreview";
import "@/styles/_homePage.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { theme, commonStyles } from "@/styles/theme";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const handleSchedule = () => {
    router.push("/contact");
  };

  const services = [
    {
      title: "Holistic Healing",
      description: "Comprehensive wellness approaches for mind-body balance",
      icon: "pi pi-heart-fill",
      path: "holistic-healing",
    },
    {
      title: "Energy Work",
      description: "Reiki and energy healing sessions",
      icon: "pi pi-sun",
      path: "energy-work",
    },
    {
      title: "Moon Circles",
      description: "Sacred gatherings for spiritual growth and connection",
      icon: "pi pi-moon",
      path: "moon-circles",
    },
    {
      title: "Wellness Coaching",
      description: "Personalized guidance for optimal health",
      icon: "pi pi-users",
      path: "wellness-coaching",
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-8">
            <Image
              src="/images/hk-icon.png"
              alt="KD Holistics Icon"
              width={200}
              height={200}
              className="hero-image"
              priority
            />
          </div>
          <h1>KD Holistics</h1>
          <p>Holistic Health & Wellness</p>
          <p>Nurturing Mind, Body, and Spirit</p>
          <Button
            label="Schedule Your Session"
            icon="pi pi-calendar-plus"
            className="p-button-rounded p-button-lg"
            style={{
              ...commonStyles.buttonBase,
              padding: theme.components.button.padding.large,
              fontSize: theme.components.button.fontSize.large,
            }}
            onClick={handleSchedule}
          />
        </motion.div>
      </section>

      <section className={styles.services}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.sectionContent}
        >
          <h2>Our Services</h2>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <Card
                key={index}
                className={styles.serviceCard}
                pt={{
                  root: { className: styles.cardRoot },
                  content: { className: styles.cardContent },
                }}
              >
                <div className={styles.serviceIcon}>
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Button
                  label="Learn More"
                  text
                  className="mt-3"
                  onClick={() => router.push(`/services/${service.path}`)}
                  style={{
                    color: theme.colors.primary.text,
                    fontSize: theme.typography.fontSizes.sm,
                  }}
                />
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      <section className={styles.about}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.sectionContent}
        >
          <h2>About Us</h2>
          <p>
            Dedicated to providing holistic wellness solutions that nurture your
            complete well-being. Our approach combines traditional wisdom with
            modern practices.
          </p>
          <Button
            label="Read More"
            outlined
            className="mt-4"
            onClick={() => router.push("/about")}
            style={{
              ...commonStyles.buttonBase,
              background: "transparent",
              border: `2px solid ${theme.colors.primary.main}`,
              color: theme.colors.primary.text,
            }}
          />
        </motion.div>
      </section>

      <section className={styles.contact}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.sectionContent}
        >
          <h2>Connect with Kas</h2>
          <p>Begin your wellness journey today</p>
          <Button
            label="Contact Kas"
            className="mt-4"
            onClick={() => router.push("/contact")}
            style={{
              ...commonStyles.buttonBase,
              background: theme.colors.gradients.button,
            }}
          />
        </motion.div>
      </section>

      <div className="animated-background"></div>
      {/* <Hero
        title="Welcome to Holistic Kas"
        description="A space for personal and spiritual growth through holistic healing, education, and community."
        ctaLabel="Join the Journey"
        ctaIcon="pi pi-heart"
        imageSrc={HeroImage.src}
        imageAlt="Kas Profile"
        onCtaClick={() => handleNavigateClick("social")}
      /> */}
      {/* <EmailSignup /> */}
      {/* <MoonCirclesPreview />
      <MoonCircleScrollPreview /> */}
    </main>
  );
}
