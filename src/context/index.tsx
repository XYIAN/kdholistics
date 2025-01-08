"use client";
import React, { ReactNode } from "react";
import { ApplicationProvider } from "./providers";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ApplicationProvider>{children}</ApplicationProvider>;
};

export default Providers;
