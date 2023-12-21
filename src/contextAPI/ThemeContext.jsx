import PropTypes from "prop-types";
import { createContext, useState } from "react";
export const ThemeToggle = createContext();

const ThemeToggleProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const isLocalStorageDark =
    localStorage.getItem("App Theme") === "dark" ? true : false;
  return (
    <ThemeToggle.Provider
      value={{ isDarkMode, setIsDarkMode, isLocalStorageDark }}
    >
      {children}
    </ThemeToggle.Provider>
  );
};

export default ThemeToggleProvider;

ThemeToggleProvider.propTypes = {
  children: PropTypes.any,
};
