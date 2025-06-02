"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "@/styles/_emailSignup.scss";
import { theme, commonStyles } from "@/styles/theme";

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
  const [success, setSuccess] = useState<boolean>(false);

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
      setSuccess(true);
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
    <section className="email-signup">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Join Our Newsletter</h2>
        <p>
          Stay updated with the latest holistic health insights and upcoming
          events.
        </p>
        {success ? (
          <div className="success-message">
            Thank you for subscribing! We&apos;ll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <InputText
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <Button
                type="submit"
                label={loading ? "Submitting..." : "Subscribe"}
                disabled={loading}
                style={{
                  ...commonStyles.buttonBase,
                  padding: theme.components.button.padding.default,
                  fontSize: theme.components.button.fontSize.default,
                }}
              />
            </div>
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSignup;
