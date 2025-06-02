"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Steps } from "primereact/steps";
import { MenuItem } from "primereact/menuitem";

const ClosingRitual = () => {
  const closingSteps: MenuItem[] = [
    {
      label: "Gratitude Circle",
      icon: "pi pi-star",
    },
    {
      label: "Integration",
      icon: "pi pi-heart",
    },
    {
      label: "Blessing",
      icon: "pi pi-moon",
    },
    {
      label: "Closing Prayer",
      icon: "pi pi-circle",
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
          <h2 className="text-2xl font-semibold mb-6">Closing Ritual</h2>

          <p className="mb-8">
            As we prepare to close our sacred circle, we take time to integrate
            our experiences and anchor the wisdom we&apos;ve gathered. This
            closing ritual helps us transition mindfully back into our daily
            lives while carrying forward the insights and connections we&apos;ve
            made.
          </p>

          <div className="mb-12">
            <Steps
              model={closingSteps}
              className="custom-steps"
              readOnly={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-purple-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-medium mb-4">Sacred Integration</h3>
              <p className="text-gray-600">
                Take a moment to reflect on the insights, emotions, and
                connections you&apos;ve experienced during our time together.
                Allow these experiences to settle into your being, knowing they
                will continue to unfold in the days ahead.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-purple-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-medium mb-4">Collective Blessing</h3>
              <p className="text-gray-600">
                Together, we offer a blessing for each participant&apos;s
                journey, acknowledging the sacred container we&apos;ve created
                and the wisdom we&apos;ve shared. We close with a moment of
                silence, honoring the transformative power of community.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Card>
    </section>
  );
};

export default ClosingRitual;
