import { useContext, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeToggle } from "../contextAPI/ThemeContext";

const AppThemeChangeButton = () => {
  const { setIsDarkMode } = useContext(ThemeToggle);
  const handelThemeSwitcher = (checked) => {
    const htmlId = document.getElementById("html-Id");
    htmlId?.classList.remove("light", "dark");
    if (typeof window !== "undefined") {
      localStorage.setItem("App Theme", checked ? "dark" : "light");
    }
    if (checked) {
      htmlId?.classList.toggle("dark");
    } else {
      htmlId?.classList.toggle("light");
    }
    setIsDarkMode((pre) => !pre);
  };

  useEffect(() => {
    const theme = localStorage.getItem("App Theme");
    const htmlId = document.getElementById("html-Id");
    if (theme) {
      htmlId?.classList.remove("light", "dark");
      htmlId?.classList.add(theme);
    } else {
      htmlId?.classList.remove("light", "dark");
      htmlId?.classList.add("light");
      setIsDarkMode(false);
      if (typeof window !== "undefined") {
        setIsDarkMode(false);
        localStorage.setItem("App Theme", "light");
      }
    }
  }, [setIsDarkMode]);

  return (
    <DarkModeSwitch
      checked={localStorage.getItem("App Theme") === "dark" ? true : false}
      onChange={handelThemeSwitcher}
      size={28}
      sunColor="#000"
      moonColor="#F5F5F5"
      data-for="registerTip"
      data-tip
    />
  );
};

export default AppThemeChangeButton;
