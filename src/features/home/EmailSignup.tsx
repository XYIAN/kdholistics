"use client";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "@/styles/_emailSignup.scss";

type FormValues = {
  email: string;
};

const EmailSignup = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Email submitted:", data);
    reset();
  };

  return (
    <section className="email-signup-panel">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="email-signup-wrapper"
      >
        <Card className="p-card-email text-center shadow-5">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Stay Connected 🌙
          </h2>
          <p className="text-base md:text-lg mb-4">
            Join the Holistic Kas community and receive lunar updates, rituals,
            and exclusive content.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-column md:flex-row gap-3 justify-content-center align-items-center"
          >
            <InputText
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="p-inputtext-lg email-input"
            />
            <Button
              type="submit"
              label="Sign Up"
              icon="pi pi-send"
              className="p-button-rounded p-button-lg p-button-glow"
            />
          </form>
        </Card>
      </motion.div>
    </section>
  );
};

export default EmailSignup;
