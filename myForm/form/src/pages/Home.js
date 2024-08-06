import React, { useEffect, useState } from "react";

const Home = () => {
  const [nm, setNm] = useState("");

  useEffect(() => {
    const x = JSON.parse(localStorage.getItem("Myuser"));
    if (x) {
      setNm(x);
    }
  }, []);

  return (
    <div>
      <h1>Hello {nm?.emailExist?.name} </h1>
    </div>
  );
};

export default Home;
