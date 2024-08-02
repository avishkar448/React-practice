import React, { useCallback, useState } from "react";

const CounterX = () => {
  const [count, setCount] = useState(0);

  const handelClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handelClick}>click</button>
    </div>
  );
};

export default CounterX;
