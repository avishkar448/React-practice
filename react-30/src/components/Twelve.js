// Build a file uploader component that allow a users to upload images

import React, { useState } from "react";

const Twelve = () => {
  const [file, setFile] = useState(null);

  const handleImage = (e) => {
    const selectFile = e.target.files[0];
    setFile(selectFile);
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImage} />
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="images"
          width={"300px"}
          height={"300px"}
        />
      )}
    </div>
  );
};

export default Twelve;
