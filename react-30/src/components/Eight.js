// simple todo list to add or remove functionality

import React, { useState } from "react";

const Eight = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div>
      <input
        className="border-2 border-black m-2"
        placeholder="Enter text"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-1" onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li className="m-2" key={index}>
            {todo}
            {"   "}
            <button
              className="bg-red-600 text-white p-1"
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Eight;
