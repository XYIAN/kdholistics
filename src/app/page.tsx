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
// import { useRouter } from "next/navigation";
import Image from "next/image";
import { theme, commonStyles } from "@/styles/theme";

const CALENDLY_URL = "http://calendly.com/holistickas";

export default function Home() {
  // const router = useRouter();

  // const handleNavigateClick = (to: string) => {
  //   router.push(`/${to}`);
  // };

  const handleSchedule = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="home-container">
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-8">
            <Image
              src="/images/lotus_light.png"
              alt="Holistic Healing"
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

      <section className="services-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Services</h2>
          <div className="service-grid">
            {[
              {
                title: "Holistic Healing",
                description:
                  "Comprehensive wellness approaches for mind-body balance",
                icon: "pi pi-heart-fill",
              },
              {
                title: "Energy Work",
                description: "Reiki and energy healing sessions",
                icon: "pi pi-sun",
              },
              {
                title: "Wellness Coaching",
                description: "Personalized guidance for optimal health",
                icon: "pi pi-users",
              },
            ].map((service, index) => (
              <Card key={index} className="service-card">
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
                />
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="about-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
            style={{
              ...commonStyles.buttonBase,
              background: "transparent",
              border: `2px solid ${theme.colors.primary.main}`,
              color: theme.colors.primary.text,
            }}
          />
        </motion.div>
      </section>

      <section className="contact-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get in Touch</h2>
          <p>Start your wellness journey today</p>
          <Button
            label="Contact Us"
            className="mt-4"
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
