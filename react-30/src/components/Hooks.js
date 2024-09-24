import React, { useReducer, useRef } from "react";

const initialState = {
  count: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const Hooks = () => {
  const [countState, dispatch] = useReducer(countReducer, initialState);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.style.backgroundColor = "red";
  };
  return (
    <div>
      <h1>Counter: {countState.count}</h1> <br />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <br />
      <h1>UseRef Example</h1>
      {/* <input ref={inputRef} type="text" className="border-2" placeholder="focus me"/>
      <button onClick={handleClick}>Focus Input</button> */}
      <div
        ref={inputRef}
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "lightgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Avishkar</h1>
      </div>
      <button onClick={handleClick}>Click please</button>
    </div>
  );
};

export default Hooks;
