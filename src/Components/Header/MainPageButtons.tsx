import { NavbarContent, NavbarItem } from "@nextui-org/react";
import DarkModeToggle from "./DarkModeToggle";

const MainPageRoutes = () => {
  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <DarkModeToggle />
      </NavbarItem>
    </NavbarContent>
  );
};

export default MainPageRoutes;
