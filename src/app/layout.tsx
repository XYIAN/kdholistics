import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "../styles/commonStyles.scss";
import Providers from "@/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holistic Kas", // The title shown in the browser tab
  description: "Modern Health for Humans", // Meta description

  openGraph: {
    title: "Holistic Kas",
    description: "Modern Health for Humans",
    url: "https://holistickas.com",
    siteName: "Holistic Kas",
    images: [
      {
        url: "https://github.com/XYIANSoftware/images/blob/main/client/kdh/kd2.png?raw=true", // Replace with your actual image URL
        width: 1200, // Recommended OG image size
        height: 630,
        alt: "Preview of Holistic Kas",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image", // This ensures a large preview on Twitter
    title: "Holistic Kas",
    description: "Modern Health for Humans",
    images: [
      "https://github.com/XYIANSoftware/images/blob/main/client/kdh/kd2.png?raw=true",
    ], // Same Open Graph image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Providers>{children}</Providers>
        </body>
      </PrimeReactProvider>
    </html>
  );
}
