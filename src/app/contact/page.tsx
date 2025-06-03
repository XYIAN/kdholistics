"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "@/styles/_contactPage.scss";
import { theme } from "@/styles/theme";
import Script from "next/script";

const contactLinks = [
  {
    title: "Instagram",
    icon: "pi pi-instagram",
    description: "Follow us for daily wellness tips and updates",
    link: "https://instagram.com/holistickas",
    color: "#E1306C",
  },
  {
    title: "Etsy Shop",
    icon: "pi pi-shopping-bag",
    description: "Browse our collection of holistic wellness products",
    link: "https://etsy.com/shop/holistickas",
    color: "#F56400",
  },
  {
    title: "Email",
    icon: "pi pi-envelope",
    description: "Get in touch for inquiries and collaborations",
    link: "mailto:contact@kdholistics.com",
    color: "#4CAF50",
  },
  {
    title: "Phone",
    icon: "pi pi-phone",
    description: "Call us for immediate assistance",
    link: "tel:+1234567890",
    color: "#2196F3",
  },
  {
    title: "Facebook",
    icon: "pi pi-facebook",
    description: "Join our wellness community",
    link: "https://facebook.com/holistickas",
    color: "#1877F2",
  },
  {
    title: "YouTube",
    icon: "pi pi-youtube",
    description: "Watch our wellness and meditation videos",
    link: "https://youtube.com/@holistickas",
    color: "#FF0000",
  },
];

const ContactPage = () => {
  const handleContactClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="contact-container">
      <div className="animated-background"></div>

      <motion.section
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Schedule a Session</h1>
        <p>
          Book your transformative wellness journey or connect with us through
          various channels.
        </p>
      </motion.section>

      <motion.section
        className="calendly-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="calendly-card">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/holistickas?hide_landing_page_details=1&hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "700px" }}
          />
          <Script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          />
        </Card>
      </motion.section>

      <motion.section
        className="contact-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {contactLinks.map((contact, index) => (
          <motion.div
            key={contact.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              className="contact-card"
              onClick={() => handleContactClick(contact.link)}
            >
              <div className="card-content">
                <div
                  className="icon-circle"
                  style={{ backgroundColor: contact.color }}
                >
                  <i className={contact.icon}></i>
                </div>
                <h2>{contact.title}</h2>
                <p>{contact.description}</p>
                <Button
                  label={`Visit ${contact.title}`}
                  icon={`${contact.icon}`}
                  className="p-button-text"
                  style={{
                    color: contact.color,
                    fontSize: theme.typography.fontSizes.sm,
                  }}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
};

export default ContactPage;
