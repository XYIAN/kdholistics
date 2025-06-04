"use client";

import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation";
import LoadingScreen from "@/components/common/LoadingScreen";
import { useLoadingState } from "@/hooks/useLoadingState";

// PrimeReact imports
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./globals.css";
import "@/styles/globalStyles.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = useLoadingState();

  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>
          <div className="global-background"></div>
          <div className="global-overlay"></div>
          <Navigation />
          {isLoading && <LoadingScreen />}
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
