//create component that changes its background color when clicked

import React, { useState } from "react";

const Nine = () => {
  const [color, setColor] = useState("white");

  const handleClick = () => {
    const newColor = color === "white" ? "red" : "white";
    setColor(newColor);
  };

  return (
    <div
      className="m-auto mt-3"
      onClick={handleClick}
      style={{
        backgroundColor: `${color}`,
        width: "200px",
        height: "200px",
        border: "1px solid black",
      }}
    >
      click me to change the color
    </div>
  );
};

export default Nine;
