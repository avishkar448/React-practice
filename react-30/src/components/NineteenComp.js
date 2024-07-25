import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../style/Nineteen.css";

const NineteenComp = () => {
  const { isDark } = useTheme();
  const themeClass = isDark ? "dark-theme" : "light-theme";
  return (
    <div className={`constainer ${themeClass}`}>
      <h1 className="text-3xl font-bold">Hello! Avishkar</h1>
    </div>
  );
};

export default NineteenComp;
