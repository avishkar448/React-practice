//Toggle swich component

import React, { useState } from "react";

const Five = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div>
      <input type="checkbox" className="border-2" onChange={handleToggle} />
      <p className="text-xl">{isToggle ? "ON" : "OFF"}</p>
    </div>
  );
};

export default Five;
