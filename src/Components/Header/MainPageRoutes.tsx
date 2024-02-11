import { NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link } from "react-scroll";

const MainPageRoutes = () => {
  return (
    <NavbarContent className="sm:flex gap-4" justify="center">
      <NavbarItem isActive>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Home
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};

export default MainPageRoutes;
