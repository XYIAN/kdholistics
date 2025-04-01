"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import "@/styles/_emailSignup.scss";

type FormData = {
  email: string;
};

const EmailSignup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: FormData): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Subscription failed. Please try again later.");
      }
      alert("Thank you for subscribing!");
      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error subscribing:", error);
        alert(error.message);
      } else {
        alert("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="email-signup-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="email-signup-title">Join Our Newsletter</h2>
      <p className="email-signup-subtitle">
        Stay updated with the latest holistic health insights and upcoming
        events.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="email-signup-form">
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Please enter a valid email",
            },
          })}
          className="email-input"
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
        <Button
          type="submit"
          label={loading ? "Submitting..." : "Subscribe"}
          className="p-button-rounded p-button-lg email-signup-button"
          disabled={loading}
        />
      </form>
    </motion.section>
  );
};

export default EmailSignup;
