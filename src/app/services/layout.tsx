"use client";

import "@/styles/_servicesPage.scss";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="services-container">
      <div className="animated-background"></div>
      {children}
    </main>
  );
}
