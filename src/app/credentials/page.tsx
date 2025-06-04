"use client";

import { motion } from "framer-motion";
import "@/styles/_credentialsPage.scss";

const CredentialsPage = () => {
  return (
    <main className="credentials-container">
      <motion.section
        className="credentials-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Credentials & Training</h1>
        <p>A journey of continuous learning and growth</p>
      </motion.section>

      <motion.div
        className="credentials-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="credential-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Certifications</h2>
          <ul>
            <li>Certified Reiki Master Teacher</li>
            <li>Sound Healing Practitioner</li>
            <li>Crystal Healing Certification</li>
            <li>Meditation Guide Certification</li>
          </ul>
        </motion.div>

        <motion.div
          className="credential-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2>Specialized Training</h2>
          <ul>
            <li>Advanced Energy Work</li>
            <li>Chakra Balancing</li>
            <li>Lunar Cycle Ceremonies</li>
            <li>Sacred Space Creation</li>
          </ul>
        </motion.div>

        <motion.div
          className="credential-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Continuing Education</h2>
          <ul>
            <li>Advanced Meditation Techniques</li>
            <li>Holistic Wellness Studies</li>
            <li>Energy Medicine</li>
            <li>Spiritual Psychology</li>
          </ul>
        </motion.div>

        <motion.div
          className="credential-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2>Professional Memberships</h2>
          <ul>
            <li>International Association of Reiki Professionals</li>
            <li>Holistic Chamber of Commerce</li>
            <li>Sound Healing Network</li>
            <li>Crystal Healing Federation</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.section
        className="commitment-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>My Commitment to Growth</h2>
        <p>
          I believe in the power of continuous learning and growth. Each year, I
          dedicate significant time to expanding my knowledge and skills through
          advanced training, workshops, and personal practice.
        </p>
        <p>
          My commitment to professional development ensures that I can offer you
          the most effective and up-to-date holistic wellness practices
          available.
        </p>
      </motion.section>

      <motion.section
        className="ethics-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Professional Ethics</h2>
        <ul>
          <li>Commitment to client confidentiality and privacy</li>
          <li>Adherence to professional boundaries and ethical guidelines</li>
          <li>Regular supervision and peer consultation</li>
          <li>Ongoing professional development</li>
        </ul>
      </motion.section>
    </main>
  );
};

export default CredentialsPage;
