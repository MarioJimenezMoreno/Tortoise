import { Button, NavbarContent, NavbarItem, useDisclosure} from "@nextui-org/react";
import Register from "../Main Page/Register";
import Login from "../Main Page/Login";
import DarkModeToggle from "./DarkModeToggle";

const MainPageRoutes = ()  => {

  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onOpenChange: onLoginOpenChange } = useDisclosure();
  const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onOpenChange: onRegisterOpenChange } = useDisclosure();

    return (
      <NavbarContent justify="end">
      <NavbarItem className="lg:flex">
      <Button onPress={onLoginOpen} color="primary">Login</Button>
          <Login isOpen={isLoginOpen} onOpenChange={onLoginOpenChange}/>
        </NavbarItem>
        <NavbarItem>
          <Button onPress={onRegisterOpen} color="primary">Register</Button>
          <Register isOpen={isRegisterOpen} onOpenChange={onRegisterOpenChange}/>
      </NavbarItem>
      <NavbarItem>
        <DarkModeToggle/>
      </NavbarItem>
    </NavbarContent>
)}

export default MainPageRoutes;