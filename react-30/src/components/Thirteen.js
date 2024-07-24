//Implement basic authentication form with login and registeration

import React, { useState } from "react";

const Thirteen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);

  const submitForm = () => {
    if (isRegister) {
      //login
      const user = users.find(
        (i) => i.email === email && i.password === password
      );
      if (user) {
        setIsLogin(true);
      } else {
        alert("please provide valid data!!");
      }
    } else {
      //register
      if (email.trim() !== "" && password.trim() !== "") {
        const newUser = { email, password };
        setUsers([...users, newUser]);
        localStorage.setItem("xyz", JSON.stringify([...users, newUser]));
        setIsLogin(true);
      } else {
        alert("Please provide data");
      }
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {isLogin ? (
        <div>
          <h2 className="text-3xl font-bold">Hello! {email}</h2>
          <button className="bg-red-600 text-white p-1" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-bold">
            {isRegister ? "Login" : "Register"}
          </h2>
          <form>
            <input
              className="border-2 border-black m-2"
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className="border-2 border-black m-2"
              placeholder="Password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              className="bg-orange-500 text-white p-1"
              onClick={submitForm}
            >
              {isRegister ? "Login" : "Register"}
            </button>
          </form>

          <p>
            {isRegister
              ? "Dont have an account ? regiter now"
              : "Already have an account ? Login now"}
          </p>
          <button
            className="bg-blue-500 text-white p-1"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </div>
      )}
    </>
  );
};

export default Thirteen;
