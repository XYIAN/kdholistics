"use client";

import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { Image } from "primereact/image";

export default function MoonCirclesPage() {
  const router = useRouter();

  return (
    <div className="service-details-container">
      <motion.div
        className="service-details-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button
          icon="pi pi-arrow-left"
          text
          onClick={() => router.back()}
          className="back-button"
        />
        <h1>Moon Circles</h1>
        <p className="subtitle">Connect with the lunar energy</p>
      </motion.div>

      <div className="service-details-content">
        <motion.div
          className="service-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/images/moon-circle.jpg"
            alt="Moon Circle Gathering"
            width="100%"
            height="400"
            className="service-image"
          />
        </motion.div>

        <motion.div
          className="service-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>About Moon Circles</h2>
          <p>
            Moon Circles are sacred gatherings that honor the lunar cycles and
            provide a space for spiritual growth, connection, and healing. These
            intimate ceremonies combine ancient wisdom with modern practices to
            help you align with natural rhythms and tap into your inner power.
          </p>

          <h3>What to Expect</h3>
          <ul>
            <li>Guided meditation and breathwork</li>
            <li>Intention setting and manifestation practices</li>
            <li>Energy healing and chakra balancing</li>
            <li>Sacred sound healing</li>
            <li>Community sharing and support</li>
          </ul>

          <h3>Benefits</h3>
          <ul>
            <li>Deep spiritual connection and growth</li>
            <li>Enhanced intuition and self-awareness</li>
            <li>Emotional healing and release</li>
            <li>Connection with like-minded individuals</li>
            <li>Regular practice for personal transformation</li>
          </ul>

          <div className="cta-section">
            <h3>Join Our Next Circle</h3>
            <p>
              Experience the transformative power of Moon Circles. Our
              gatherings are held monthly, aligned with the lunar cycles.
            </p>
            <Button
              label="Book Your Spot"
              className="p-button-primary"
              onClick={() => router.push("/contact")}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
