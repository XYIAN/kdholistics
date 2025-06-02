"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { classNames } from "primereact/utils";
import styles from "./Navigation.module.css";

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
    { label: "Contact", path: "/contact" },
  ];

  const handleNavClick = (path: string) => {
    setShowSidebar(false);
    router.push(path);
  };

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => handleNavClick(item.path)}
          className={classNames(styles.navLink, {
            [styles.active]: pathname === item.path,
          })}
        >
          {item.label}
        </button>
      ))}
    </>
  );

  return (
    <nav className={classNames(styles.nav, { [styles.scrolled]: isScrolled })}>
      <div className={styles.container}>
        <button onClick={() => handleNavClick("/")} className={styles.logo}>
          KD Holistics
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
          <div className={styles.sidebarHeader}>
            <Button
              icon="pi pi-times"
              onClick={() => setShowSidebar(false)}
              text
              rounded
              className={styles.closeButton}
            />
          </div>
          <div className={styles.sidebarContent}>
            <NavLinks />
          </div>
        </Sidebar>
      </div>
    </nav>
  );
};

export default Navigation;
