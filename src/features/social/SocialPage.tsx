"use client";

import { motion } from "framer-motion";
import "@/styles/_socialPage.scss";

interface SocialItem {
  platform: string;
  icon: string; // using PrimeIcons class string
  url: string;
  details?: string;
  image?: string;
}

const socialItems: SocialItem[] = [
  {
    platform: "Etsy",
    icon: "pi pi-shopping-bag", // Using a shopping bag icon for Etsy
    url: "https://kdsholisticgoods.etsy.com",
    details: "Shop for Holistic Goods",
  },
  {
    platform: "Instagram",
    icon: "pi pi-instagram",
    url: "https://instagram.com/holistickas",
    details: "Follow for Holistic Health & Healing",
  },
  {
    platform: "Email",
    icon: "pi pi-envelope",
    url: "mailto:holistickas@gmail.com",
    details: "Send us an email",
  },
];

const SocialPage = () => {
  return (
    <section className="social-page">
      <motion.div
        className="social-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="social-title">Connect with Kas</h1>
        <p className="social-subtitle">
          Follow for holistic health insights, healing tips, and more.
        </p>
      </motion.div>
      <ul className="social-list">
        {socialItems.map((item, index) => (
          <motion.li
            key={index}
            className="social-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div
              className="social-item-content"
              onClick={() => window.open(item.url, "_blank")}
            >
              <i className={`${item.icon} social-item-icon`}></i>
              <div className="social-item-text">
                <h2 className="social-item-platform">{item.platform}</h2>
                {item.details && (
                  <p className="social-item-details">{item.details}</p>
                )}
              </div>
              <i className="pi pi-arrow-right social-item-arrow"></i>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SocialPage;
