//search bar

import React, { useState } from "react";

const Fifteen = () => {
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

  const [searchInput, setSearchInput] = useState("");
  const filterSearch = items.filter((item, index) =>
    item.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="border-2 border-black m-2"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <ul>
        {searchInput === "" ? (
          <h2> Search Animes </h2>
        ) : (
          filterSearch.map((item, index) => <li key={index}>{item}</li>)
        )}

        {/* {filterSearch.map((item, index) => (
          <li key={index}>{item}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default Fifteen;
