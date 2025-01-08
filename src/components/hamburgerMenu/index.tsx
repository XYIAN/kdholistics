"use client";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";
import { MenuItemDisplay } from "./MenuItemDisplay";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return (
    <>
      <Button
        icon={"fa-solid fa-bars"}
        onClick={() => openMenu()}
        style={{
          position: "fixed",
          top: "2rem",
          right: "2rem",
          padding: "5px",
          zIndex: 999,
        }}
        pt={{
          root: {
            style: {
              backgroundColor: "white",
            },
          },
        }}
      />
      <Sidebar
        //header={SideBarHeader}
        visible={isOpen}
        onHide={() => setIsOpen(false)}
        position="right"
        className="flex justify-content-center align-content-center sideMenu bg-black-alpha-90"
        closeIcon={
          <i
            className="fa-solid fa-xmark fa-lg cursor-pointer hover:shadow-4"
            style={{ color: "white", zIndex: 999 }}
          />
        }
      >
        <MenuItemDisplay onClose={closeMenu} />
      </Sidebar>
    </>
  );
};

export default HamburgerMenu;
