"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";

const OpeningSection = () => {
  return (
    <section className="mb-12">
      <Card className="moon-circle-card">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Opening Ritual</h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-medium mb-3">
                Sacred Space Creation
              </h3>
              <p>
                We begin by creating a sacred container through gentle
                meditation, intention setting, and the ritual of calling in the
                four directions. This practice helps ground our energy and
                create a safe space for deep connection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-medium mb-3">Lunar Wisdom</h3>
              <p>
                Together, we explore the current moon phase and its unique
                energetic qualities. Understanding these cosmic influences helps
                us align our intentions and work with the natural rhythms of the
                lunar cycle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-medium mb-3">Group Agreements</h3>
              <p>
                We establish sacred agreements for our circle, ensuring everyone
                feels safe to share authentically. These include
                confidentiality, non-judgment, and honoring each person&apos;s
                unique journey.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Card>
    </section>
  );
};

export default OpeningSection;
