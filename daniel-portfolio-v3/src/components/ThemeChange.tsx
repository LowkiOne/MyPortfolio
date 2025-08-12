import { useEffect, useState } from "react";

const ThemeChange = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "Light" : "Dark"} Theme
    </button>
  );
};

export default ThemeChange;
