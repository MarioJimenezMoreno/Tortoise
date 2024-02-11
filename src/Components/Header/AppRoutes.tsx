import {NavbarContent, NavbarItem} from "@nextui-org/react";
import {Link} from 'react-router-dom'

const AppRoutes = () => {
    return (
<NavbarContent className="sm:flex gap-4" justify="center">
<NavbarItem>
  <Link to="/app" color="foreground">
    Agenda
    </Link>
  </NavbarItem>
  <NavbarItem>
  <Link to="/stats" color="foreground">
    Analytics
    </Link>
  </NavbarItem>
  <NavbarItem>
  <Link to="/profile" color="foreground">
      Profile
    </Link>
  </NavbarItem>
</NavbarContent>
)}

export default AppRoutes;