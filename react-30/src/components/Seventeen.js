//Build a color picker that allow users to select a color

import React, { useState } from "react";

const Seventeen = () => {
  const [selectColor, setSelectColor] = useState("#000000");

  return (
    <div>
      <input type="color" onChange={(e) => setSelectColor(e.target.value)} />
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: selectColor,  
          border: "1px solid black",
        }}
      ></div>
    </div>
  );
};

export default Seventeen;
