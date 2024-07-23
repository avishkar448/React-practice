//create a form that takes a user input and display it in real time

import React, { useState } from "react";

const Three = () => {
  const [nm, setNm] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        className="border-2 m-2"
        placeholder="Enter Name"
        type="text"
        value={nm}
        onChange={(e)=>setNm(e.target.value)}
      />
      <br />
      <input
        className="border-2 m-2"
        placeholder="Enter Email"
        type="text"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <br />
      
      <br />
      <br />
      <h3 className="text-3xl font-bold">Name: {nm}</h3>
      <h3 className="text-3xl font-bold">Email: {email}</h3>
    </div>
  );
};

export default Three;
