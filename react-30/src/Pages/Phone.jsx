import React, { useEffect } from "react";

const Phone = () => {
  useEffect(() => {
    document.title = "Phone";
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">Phone</h1>
    </div>
  );
};

export default Phone;
