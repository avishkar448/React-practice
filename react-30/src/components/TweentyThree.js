//Build a pagination component using useReducer to manage current page and the number of items per page

import React, { useEffect, useReducer } from "react";

const itemsPerPage = 5;

const initialState = {
  currenPage: 1,
  totalItem: 0,
};

const pageReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOTAL_ITEMS":
      return {
        ...state,
        totalItem: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currenPage: action.payload,
      };
    default:
      return state;
  }
};

const TweentyThree = () => {
  const [paginationState, dispatch] = useReducer(pageReducer, initialState);
  const data = Array.from({ length: 25 }, (_, index) => `Item ${index}`);
  console.log(data);

  useEffect(() => {
    dispatch({ type: "SET_TOTAL_ITEMS", payload: data.length });
  }, [data]);

  const startIndex = (paginationState.currenPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dispalyItems = data.slice(startIndex, endIndex);
  console.log(dispalyItems);

  const handlePageClick = (newPage) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: newPage });
  };

  return (
    <div>
      <h1 className="text-3xl">Pagination Example</h1>
      <ul className="m-2">
        {dispalyItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="m-1">
        <button
          onClick={() => handlePageClick(paginationState.currenPage - 1)}
          disabled={paginationState.currenPage === 1}
          className="bg-sky-950 text-white p-1 m-2"
        >
          previous
        </button>
        <button
          onClick={() => handlePageClick(paginationState.currenPage + 1)}
          disabled={endIndex >= data.length}
          className="bg-sky-950 text-white p-1 m-2"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default TweentyThree;
