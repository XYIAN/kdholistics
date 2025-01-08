"use client"; // important for context

import HamburgerMenu from "@/components/hamburgerMenu";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast, ToastMessage } from "primereact/toast";
import { createContext, useContext, useRef } from "react";

interface ApplicationContextProps {
  toastMessage: (props: ToastMessage) => void;
}

const ApplicationContext = createContext<ApplicationContextProps>({
  toastMessage: () => {},
});

export function ApplicationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const toast = useRef<Toast>(null);
  const toastMessage = (props: ToastMessage) => {
    const defaultProps: ToastMessage = {
      ...props,
      severity: props.severity ? props.severity : "info",
      life: props.life ? props.life : 2000,
    };
    toast.current?.show({ ...defaultProps });
  };
  return (
    <ApplicationContext.Provider value={{ toastMessage }}>
      <ConfirmDialog />
      <HamburgerMenu />
      <Toast ref={toast} />
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplication() {
  return useContext(ApplicationContext);
}
