import {
  //@ts-ignore
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Mouse from "../../Assets/Mouse.jpg";

const AppRoutes = () => {
  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform bg-secondary-300"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={Mouse}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">
                {localStorage.getItem("email") || "Guest"}
              </p>
            </DropdownItem>
            {/* @ts-ignore */}
            <DropdownItem as={Link} to="/profile">
              Profile
            </DropdownItem>
            <DropdownItem key="system">My membership</DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            {/* @ts-ignore */}
            <DropdownItem as={Link} to="/" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
      <NavbarItem>
        <DarkModeToggle />
      </NavbarItem>
    </NavbarContent>
  );
};

export default AppRoutes;
