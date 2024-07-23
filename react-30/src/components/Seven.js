// Build a timer that count down from a specified time

import React, { useEffect, useState } from "react";

const Seven = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [time]);
  return (
    <div>
      <h1 className="text-3xl font-bold">{time}</h1>
    </div>
  );
};

export default Seven;
