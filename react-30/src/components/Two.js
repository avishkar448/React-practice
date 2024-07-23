//build a counter application with increment and decrement button

import React, { useState } from "react";

const Two = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const add = count + 1;
    setCount(add);
  };

  const decrement = () => {
    const sub = count - 1;
    setCount(sub);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Count: {count}</h1>
      <button
        onClick={increment}
        className="bg-slate-600 text-white w-12 font-bold m-2"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="bg-slate-600 text-white w-12 font-bold"
      >
        -
      </button>
    </div>
  );
};

export default Two;
