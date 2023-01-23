import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material";
import CardEvent from "../cardEvent/CardEvent";
import {TransitionGroup} from '@mui'

const SearchInput = styled("input")({
   outline: "none",
   border: "none",
   backgroundColor: "transparent",
   color: "white",
   "&:hover": {},
   "::placeholder": {
      color: "#ffffff9d",
   },
});

const SearchTable = () => {
   const [searchTerm, setSearchTerm] = useState("");

   const navigate = useNavigate();

   const handleSumbit = (e) => {
      e.preventDefault();

      if (searchTerm) {
         navigate(`/search/${searchTerm}`);
         setSearchTerm("");
      }
   };

   return (
      <>
         <Paper
            component="form"
            onSubmit={handleSumbit}
            sx={{
               backgroundColor: "basics.gray",
               mt: "5vh",
               borderRadius: 20,
               pl: 2,
               display: "grid",
               gridTemplateColumns: "1fr 11fr",
            }}
         >
            <IconButton type="submit">
               <SearchIcon color="secondary" sx={{ opacity: "0.6" }} />
            </IconButton>
            <SearchInput
               type="text"
               placeholder="Search..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
            />
         </Paper>
         <TransitionGroup
         <CardEvent/>
         <CardEvent/>
         <CardEvent/>
         <CardEvent/>
         <CardEvent/>
      </>
   );
};

export default SearchTable;
