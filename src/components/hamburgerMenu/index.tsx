"use client";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";
import { MenuItemDisplay } from "./MenuItemDisplay";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return (
    <>
      <Button
        icon="pi pi-bars"
        onClick={openMenu}
        className={styles.menuButton}
        text
        rounded
      />
      <Sidebar
        visible={isOpen}
        onHide={closeMenu}
        position="right"
        className={styles.sidebar}
        showCloseIcon={false}
        modal={true}
      >
        <div className={styles.sidebarHeader}>
          <Button
            icon="pi pi-times"
            onClick={closeMenu}
            text
            rounded
            className={styles.closeButton}
          />
        </div>
        <MenuItemDisplay onClose={closeMenu} />
      </Sidebar>
    </>
  );
};

export default HamburgerMenu;
