import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const x=await axios.post(`${process.env.REACT_APP_API}/api/v1/user/login`, {
        email,
        password,
      });

      if(x){ 
        console.log("Login Successfully")
        console.log(x.data.message)
        localStorage.setItem("Myuser",JSON.stringify(x.data))
      }
    } catch (error) {
      console.log("Error in login", error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
