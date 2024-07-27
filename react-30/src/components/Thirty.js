// Create a different route pages component using useEffect to update that document title with the visited page whenever it changes

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Phone from "../Pages/Phone";

const Thirty = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} >
            <Route path="phone" element={<Phone/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Thirty;
