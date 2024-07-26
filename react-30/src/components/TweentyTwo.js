//build a todo list using usereducer

import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case "REMOVE":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case "TOOGLE":
      return {
        ...state,
        todos: state.todos.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};

const TweentyTwo = () => {
  const [inputVal, setInputVal] = useState("");

  const [todoState, todoDispatch] = useReducer(reducer, initialState);

  const addTodo = () => {
    todoDispatch({ type: "ADD_TODO", payload: inputVal });
  };

  const removeTodo = (itemId) => {
    todoDispatch({ type: "REMOVE", payload: itemId });
  };

  return (
    <div>
      <h1 className="text-3xl">Todo List</h1>
      <input
        type="text"
        className="border-2 border-black m-2"
        placeholder="text..."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="p-1 bg-blue-950 text-white" onClick={addTodo}>
        Add-Todo
      </button>
      <hr className="m-2" />

      <ul>
        {todoState.todos.map((item) => (
          <li className="cursor-pointer" key={item.id}>
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
              onClick={() => todoDispatch({ type: "TOOGLE", payload: item.id })}
            >
              {item.text}
              <button
                className="p-1 m-1 bg-red-600 text-white"
                onClick={() => removeTodo(item.id)}
              >
                remove
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweentyTwo;
