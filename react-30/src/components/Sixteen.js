// Develop a pagination component to navigate through a large list of items

import React, { useState } from "react";

const Sixteen = () => {
  const items = [
    "Naruto",
    "Attack on Titan",
    "My Hero Academia",
    "One Piece",
    "Demon Slayer",
    "Fullmetal Alchemist: Brotherhood",
    "Death Note",
    "Sword Art Online",
    "Tokyo Ghoul",
    "Dragon Ball Z",
    "Hunter x Hunter",
    "One Punch Man",
    "Jujutsu Kaisen",
    "Bleach",
    "Fairy Tail",
    "Black Clover",
    "Steins;Gate",
    "Re:Zero",
    "No Game No Life",
    "Code Geass",
    "The Promised Neverland",
  ];
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers)
  // console.log(currentItems)
  return (
    <>
      <div>
        <ul>
          {currentItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="flex justify-center">
        {pageNumbers.map((number) => (
          <li
            className="cursor-pointer m-2 list-none bg-blue-700 text-white p-2 rounded"
            key={number}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </li>
        ))}
      </div>
    </>
  );
};

export default Sixteen;
