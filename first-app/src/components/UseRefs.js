import React, { useState, useRef } from "react";

const UseRefs = () => {
  const [myNum, setMyNum] = useState(0);
  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("Avishkar");
    console.log(inputOne.current);
    inputOne.current.style.width ="400px"
  };

  const getTextBox = () => {
    console.log("Abhay");
    console.log(inputTwo.current);
  };
  return (
    <div>
      <h2>Learn UseRef</h2>
      <input
        type="number"
        value={myNum}
        ref={inputOne}
        onChange={(e) => setMyNum(e.target.value)}
      />
      <input
        type="text"
        value={myNum}
        ref={inputTwo}
        onChange={(e) => setMyNum(e.target.value)}
      />

      <h3>Value is: {myNum}</h3>

      <button onClick={() => getNumBox()}>Ruppes</button>
      <button onClick={() => getTextBox()}>Doller</button>
    </div>
  );
};

export default UseRefs;
