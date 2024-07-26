//Fetch data from multiple APIs and display the combined data in your component

import React, { useState } from "react";
import axios from "axios";

const TweenttySeven = () => {
  const [text, setText] = useState([]);

  try {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => setText(response.data))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <ul>
        {text.map((item) => (
          <li key={item.id}>{item.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default TweenttySeven;
