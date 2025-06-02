import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";

// PrimeReact styles
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./globals.css";

import Navigation from "@/components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KD Holistics - Holistic Health & Wellness",
  description:
    "Nurturing Mind, Body, and Spirit through holistic healing practices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </PrimeReactProvider>
    </html>
  );
}
