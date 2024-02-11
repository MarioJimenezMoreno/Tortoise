import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";
import { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(`${darkMode ? "dark" : "light"}`);
  };

  return (
    <Switch
      onChange={toggleDarkMode}
      size="lg"
      color="primary"
      defaultSelected
      thumbIcon={({ isSelected }) => (isSelected ? <MoonIcon /> : <SunIcon />)}
    ></Switch>
  );
};

export default DarkModeToggle;
