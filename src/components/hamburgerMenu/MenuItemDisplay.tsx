import { useRouter } from "next/navigation";
import { Ripple } from "primereact/ripple";
import { Button } from "primereact/button";
import { MenuItemModel } from "@/types";
import { MENU } from "@/constants";

const BUTTON_SYLE = "p-2 font-bold w-11";

interface MenuItemDisplayProps {
  onClose: () => void;
}
export const MenuItemDisplay = ({ onClose }: MenuItemDisplayProps) => {
  const currentRoute = window.location.pathname;
  const router = useRouter();

  const handleNavigateClick = (to: string) => {
    router.push(`/${to}`);
    onClose();
  };

  function filterMenuByLabel(
    menu: MenuItemModel[],
    labelToRemove: string
  ): MenuItemModel[] {
    return menu.filter((item) => item.route !== labelToRemove.replace("/", ""));
  }

  const MENU_WITHOUT_CURRENT_ROUTE: MenuItemModel[] = filterMenuByLabel(
    MENU,
    currentRoute
  );

  return (
    <div className="flex flex-column p-1 mobileMenu gap-4 justify-content-center align-content-center">
      {MENU_WITHOUT_CURRENT_ROUTE.map((page) => {
        return (
          <div
            key={page.route}
            className="flex justify-content-center align-items-center"
          >
            <Button
              key={page.route + "-x"}
              className={BUTTON_SYLE}
              label={page.label}
              onClick={() => handleNavigateClick(page.route)}
            >
              <Ripple
                pt={{
                  root: {
                    style: {
                      background: "rgba(0, 14, 0, .4)",
                    },
                  },
                }}
              />
            </Button>
          </div>
        );
      })}
    </div>
  );
};
