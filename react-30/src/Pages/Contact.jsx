import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Contact() {
  useEffect(() => {
    document.title = "CONTACT";
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">Contact</h1>
      <Outlet/>
    </div>
  );
}
