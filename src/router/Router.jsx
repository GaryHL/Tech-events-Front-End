import { Button } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={<Home/>}
            />
            <Route path="/home" element={<Home/>} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
