//create simple counter application using useReducer

import React, { useReducer } from "react";

const TweentyOne = () => {
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter App</h1>
      <h2 className="text-3xl font-bold">Count: {state.count}</h2> <br />
      <button
        className="bg-blue-600 text-white p-1 m-2"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        add
      </button>
      <button
        className="bg-blue-600 text-white p-1 m-2"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        sub
      </button>
      <button
        className="bg-blue-600 text-white p-1 m-2"
        onClick={() => dispatch({ type: "RESET" })}
      >
        reset
      </button>
    </div>
  );
};

export default TweentyOne;
