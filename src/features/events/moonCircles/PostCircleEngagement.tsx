"use client";

import { motion } from "framer-motion";
import "@/styles/_postCircleEngagement.scss";

const PostCircleEngagement = () => {
  return (
    <motion.section
      className="post-circle-engagement-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Post-Circle Engagement</h2>
      <p className="section-description">
        After the circle, you&apos;ll receive a follow-up email with journal
        prompts, insights, and details for the next circle.
      </p>
      <p className="feedback-note">
        Your feedback is invaluable to refine future circles and create a space
        that truly nurtures growth.
      </p>
    </motion.section>
  );
};

export default PostCircleEngagement;
