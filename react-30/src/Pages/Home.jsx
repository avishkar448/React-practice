import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "HOME";
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">Home</h1>
      <Outlet/>
    </div>
  );
}
