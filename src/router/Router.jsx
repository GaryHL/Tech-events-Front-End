import { Button } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";

import Search from "../views/search/Search";

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={<Home/>}
            />
            <Route path="/home" element={<Home/>} />
            <Route path="/search" element={<Search/>} />
            {/* <Route path="/tickets" element={<Home/>} /> */}
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
