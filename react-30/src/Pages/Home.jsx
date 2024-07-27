import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "HOME";
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">Home</h1>
    </div>
  );
}
