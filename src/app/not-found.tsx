"use client";

import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Suspense } from "react";
import "@/styles/_notFound.scss";

const NotFoundContent = () => {
  const router = useRouter();

  return (
    <main className="not-found-container">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Button
          label="Return Home"
          icon="pi pi-home"
          onClick={() => router.push("/")}
          className="p-button-rounded"
        />
      </motion.div>
    </main>
  );
};

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
