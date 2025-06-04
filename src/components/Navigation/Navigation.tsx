"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Image } from "primereact/image";
import { classNames } from "primereact/utils";
import { Playfair_Display } from "next/font/google";
import styles from "./Navigation.module.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Events", path: "/events" },
    { label: "Credentials", path: "/credentials" },
    { label: "Contact Kas", path: "/contact" },
  ];

  const handleNavClick = (path: string) => {
    setShowSidebar(false);
    router.push(path);
  };

  const NavLinks = () => (
    <>
      {navItems
        .filter((item) => item.path !== pathname)
        .map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavClick(item.path)}
            className={styles.navLink}
          >
            {item.label}
          </button>
        ))}
    </>
  );

  return (
    <nav className={classNames(styles.nav, { [styles.scrolled]: isScrolled })}>
      <div className={styles.container}>
        <button
          onClick={() => handleNavClick("/")}
          className={classNames(styles.logo, playfair.className)}
        >
          Holistic Kas
        </button>

        <div className={styles.desktopMenu}>
          <NavLinks />
        </div>

        <Button
          icon="pi pi-bars"
          className={styles.menuButton}
          onClick={() => setShowSidebar(true)}
          text
          rounded
        />

        <Sidebar
          visible={showSidebar}
          onHide={() => setShowSidebar(false)}
          className={styles.sidebar}
          position="right"
          showCloseIcon={false}
          modal={true}
        >
          <div className={styles.sidebarBackground}>
            <Image
              src="/images/hk-bg-lg2.png"
              alt="Sidebar Background"
              width="100%"
              height="100%"
              imageClassName={styles.backgroundImage}
            />
          </div>
          <div className={styles.sidebarOverlay} />

          <div className={styles.sidebarHeader}>
            <div className={styles.headerContent}>
              <div
                className={classNames(styles.headerTitle, playfair.className)}
                onClick={() => handleNavClick("/")}
              >
                <h1>Holistic Kas</h1>
                <p>Nurturing Mind, Body, and Spirit</p>
              </div>
              <Button
                icon="pi pi-times"
                onClick={() => setShowSidebar(false)}
                text
                rounded
                className={styles.closeButton}
              />
            </div>
          </div>

          <div className={styles.sidebarContent}>
            <div className={styles.sidebarLinks}>
              <NavLinks />
            </div>
          </div>
        </Sidebar>
      </div>
    </nav>
  );
};

export default Navigation;
