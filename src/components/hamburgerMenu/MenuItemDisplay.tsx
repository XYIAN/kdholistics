import { useRouter, usePathname } from "next/navigation";
import { Ripple } from "primereact/ripple";
import { Button } from "primereact/button";
import { MENU } from "@/constants";

interface MenuItemDisplayProps {
  onClose: () => void;
}

export const MenuItemDisplay = ({ onClose }: MenuItemDisplayProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigateClick = (to: string) => {
    router.push(`/${to}`);
    onClose();
  };

  const currentRoute = pathname?.slice(1) || "";

  const menuItems = MENU.filter((item) => item.route !== currentRoute);

  return (
    <div className="flex flex-column p-4 gap-4 justify-content-center align-content-center">
      {menuItems.map((page) => (
        <div
          key={page.route}
          className="flex justify-content-center align-items-center"
        >
          <Button
            className="w-full p-button-text p-button-lg"
            label={page.label}
            onClick={() => handleNavigateClick(page.route)}
            severity={pathname === `/${page.route}` ? "secondary" : "info"}
          >
            <Ripple />
          </Button>
        </div>
      ))}
    </div>
  );
};
