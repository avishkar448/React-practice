import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "ABOUT";
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">About</h1>
      
    </div>
  );
}
