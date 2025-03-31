"use client";

import { motion } from "framer-motion";
import "@/styles/_communitySharing.scss";

const CommunitySharing = () => {
  return (
    <motion.section
      className="community-sharing-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Community Sharing & Discussion</h2>
      <p className="section-description">
        Open the floor for anyone who wants to share their reflections. This is
        a safe space for vulnerability and connection.
      </p>
      <ul className="sharing-list">
        <li>Feel free to share any reflections or insights.</li>
        <li>
          If desired, join smaller breakout rooms for intimate discussions.
        </li>
        <li>Remember: There is no judgment, only support.</li>
      </ul>
      <p className="note-text">Take your time and speak from the heart.</p>
    </motion.section>
  );
};

export default CommunitySharing;
