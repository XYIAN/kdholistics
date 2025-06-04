"use client";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <main
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "var(--gradient-primary)",
        padding: "var(--spacing-xxl) var(--spacing-md)",
      }}
    >
      <div className="animated-background"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <Card
          className="text-center p-6 shadow-lg"
          style={{
            background: "var(--gradient-card)",
            borderRadius: "var(--border-radius-lg)",
            maxWidth: "500px",
          }}
        >
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/hk-icon.png"
              alt="KD Holistics Icon"
              width={100}
              height={100}
              className="rounded-full"
              priority
            />
          </div>

          <div className="mb-8">
            <h1
              style={{
                color: "var(--color-primary-text)",
                fontSize: "var(--font-size-xl)",
                marginBottom: "var(--spacing-md)",
              }}
            >
              Finding Your Path
            </h1>
            <p
              style={{
                color: "var(--color-primary-text-dark)",
                fontSize: "var(--font-size-md)",
                marginBottom: "var(--spacing-md)",
                lineHeight: "1.6",
              }}
            >
              The page you&apos;re looking for seems to have moved on its own
              journey. Let&apos;s guide you back to a space of clarity and
              connection.
            </p>
            <p
              style={{
                color: "var(--color-primary-text-dark)",
                fontSize: "var(--font-size-sm)",
                fontStyle: "italic",
              }}
            >
              &quot;Every detour is an opportunity for a new discovery.&quot;
            </p>
          </div>

          <div className="flex flex-column gap-3">
            <Button
              label="Return to Homepage"
              icon="pi pi-home"
              onClick={() => router.push("/")}
              style={{
                background: "var(--gradient-button)",
                border: "none",
                marginBottom: "var(--spacing-sm)",
              }}
            />
            <Button
              label="Schedule a Session"
              icon="pi pi-calendar"
              onClick={() => router.push("/contact")}
              outlined
              style={{
                borderColor: "var(--color-primary-main)",
                color: "var(--color-primary-text)",
              }}
            />
            <Button
              label="Explore Services"
              icon="pi pi-heart"
              onClick={() => router.push("/services")}
              text
              style={{
                color: "var(--color-primary-text)",
              }}
            />
          </div>
        </Card>
      </motion.div>
    </main>
  );
}
