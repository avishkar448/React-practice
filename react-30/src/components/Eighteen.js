//Implement a responsive navigation menu with hamburger icon

import React, { useState } from "react";
import "../style/Eighteen.css";
const Eighteen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="menu-icon bg-slate-500 p-1 m-2" onClick={toggleMenu}>
        menu
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Eighteen;
