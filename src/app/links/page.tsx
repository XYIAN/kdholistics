"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { SOCIAL_LINKS } from "@/constants/socialLinks";
import Image from "next/image";
import "@/styles/_linksPage.scss";

// Add Google Font
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export default function LinksPage() {
  const handleLinkClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="links-container">
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
        <div className="profile-section">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/hk-icon.png"
              alt="Holistic Kas"
              width={120}
              height={120}
              className="profile-image"
              priority
            />
          </motion.div>
          <h1 className={playfair.className}>Holistic Kas</h1>
          <p>Connect with Kas across all platforms</p>
        </div>

        <div className="links-grid">
          {SOCIAL_LINKS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="link-card"
                onClick={() => handleLinkClick(item.link)}
                style={{
                  background: item.bgColor,
                }}
              >
                <div className="card-content">
                  <div
                    className="icon-circle"
                    style={{ backgroundColor: item.color }}
                  >
                    <i className={item.icon} style={{ color: "#ffffff" }}></i>
                  </div>
                  <div className="text-content">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <Button
                    icon="pi pi-arrow-right"
                    text
                    className="arrow-button"
                    style={{ color: item.color }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
