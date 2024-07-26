//create a user authentication system using useContext to manage user login and logout

import React from "react";
import { useAuth } from "../context/AuthContext";

const TweentyFour = () => {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <h1>User Authentication</h1>

      {user ? (
        <div>
          <h2 className="text-2xl font-bold">Welcome,{user.username} </h2>
          <button
            className="p-1 m-2 bg-red-600 text-white"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button
            className="p-1 m-2 bg-blue-950 text-white"
            onClick={() => login({ username: "Avishkar" })}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default TweentyFour;
