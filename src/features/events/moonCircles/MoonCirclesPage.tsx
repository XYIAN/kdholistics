"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import "@/styles/_moonCirclesPage.scss";
import BackIconButton from "./BackToEvents";
import CeremonyDetails from "./CeremonyDetails";
import MoonHero from "./MoonHero";
import OpeningSection from "./OpeningSection";
import EnergyCheck from "./EnergyCheck";
import JournalingReflection from "./JournalingReflection";
import CommunitySharing from "./CommunitySharing";
import ClosingRitual from "./ClosingRitual";
import PostCircleEngagement from "./PostCircleEngagement";

export const MoonCirclesPage = () => {
  return (
    <section className="moon-circles-full-page">
      <BackIconButton />
      <Card className="moon-circles-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="moon-circles-content"
        >
          <MoonHero />
          <CeremonyDetails />
          <OpeningSection />
          <EnergyCheck />
          <JournalingReflection />
          <CommunitySharing />
          <ClosingRitual />
          <PostCircleEngagement />
        </motion.div>
      </Card>
    </section>
  );
};
