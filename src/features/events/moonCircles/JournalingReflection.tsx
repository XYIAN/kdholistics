"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Accordion, AccordionTab } from "primereact/accordion";

interface JournalingPrompt {
  title: string;
  description: string;
  prompts: string[];
}

const JournalingReflection = () => {
  const journalingPrompts: JournalingPrompt[] = [
    {
      title: "Self-Discovery",
      description:
        "Explore your inner landscape and current state of being through these reflective prompts:",
      prompts: [
        "What emotions are present for you in this moment?",
        "What patterns or themes have you noticed in your life lately?",
        "What wisdom is your body trying to share with you?",
      ],
    },
    {
      title: "Lunar Connection",
      description:
        "Connect with the current phase of the moon and its influence on your journey:",
      prompts: [
        "How does this moon phase resonate with your current life situation?",
        "What are you ready to release or call in during this lunar cycle?",
        "What intentions would you like to set for this moon phase?",
      ],
    },
    {
      title: "Shadow Work",
      description:
        "Gently explore the aspects of yourself that may need acknowledgment and integration:",
      prompts: [
        "What parts of yourself are you struggling to accept?",
        "What limiting beliefs are ready to be transformed?",
        "What would your highest self say to you right now?",
      ],
    },
  ];

  return (
    <section className="mb-12">
      <Card className="moon-circle-card">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Sacred Journaling</h2>

          <p className="mb-8">
            Through the practice of sacred journaling, we create space for deep
            reflection and inner wisdom to emerge. Take your time with these
            prompts, allowing your intuition to guide your exploration.
          </p>

          <Accordion className="border-none">
            {journalingPrompts.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <AccordionTab
                  header={
                    <span className="text-xl font-medium">{section.title}</span>
                  }
                >
                  <p className="mb-4 text-gray-600">{section.description}</p>
                  <ul className="space-y-4 list-disc pl-6">
                    {section.prompts.map((prompt, promptIndex) => (
                      <motion.li
                        key={promptIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: promptIndex * 0.1 }}
                        className="text-gray-700"
                      >
                        {prompt}
                      </motion.li>
                    ))}
                  </ul>
                </AccordionTab>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </Card>
    </section>
  );
};

export default JournalingReflection;
