import React from "react";
import { useTheme } from "../context/ThemeContext";

const Nineteen = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div>
      <label>
        <input type="checkbox" checked={isDark} onChange={toggleTheme} />
        {isDark ? "Light":"Dark"}
      </label>
    </div>
  );
};

export default Nineteen;
