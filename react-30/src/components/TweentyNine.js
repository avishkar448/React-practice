//Build a basic image gallery with useReducer to allow users to navigate between images and diplay the current image

import React, { useReducer } from "react";
const initialState = {
  currentImageIndex: 0,
};

const imageReducer = (state, action) => {
  switch (action.type) {
    case "PREVIOUS_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex + 1,
      };
    case "NEXT_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex - 1,
      };
    default:
      return state;
  }
};

const images = [
  "https://plus.unsplash.com/premium_photo-1693221705305-6eff5fa8e483?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1721804978061-2c23db2b5e4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720048170970-3848514c3d60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const TweentyNine = () => {
  const [state, dispatch] = useReducer(imageReducer, initialState);

  const currentImg = images[state.currentImageIndex];
  return (
    <div>
      <div
        className="m-3"
        style={{ width: "600px", height: "300px", border: "1px solid black" }}
      >
        <img src={currentImg} alt="" style={{ objectFit: "cover" }} />
      </div>

      <div className="m-2">
        <button
          className="bg-green-600 text-white p-1 m-2"
          onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}
        >
          previous
        </button>
        <button
          className="bg-green-600 text-white p-1 m-2"
          onClick={() => dispatch({ type: "NEXT_IMAGE" })}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default TweentyNine;
