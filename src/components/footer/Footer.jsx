import React from "react";
import {
   BottomNavigation,
   BottomNavigationAction,
   Box,
} from "@mui/material";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

   const location = useLocation();

   const [value, setValue] = useState("home");
   
   const handleChange = (event, newValue) => {
      setValue(newValue);
      navigate(newValue);
   };

   useEffect(() => {

      setValue(location.pathname);
      
   }, [location]);

   return (
      <Box
         backgroundColor="basics.background"
         sx={{
            position: "absolute",
            bottom: "0",
            mb: "3vh",
            width:'95%',
            px:'5%'
         }}
      >
         <BottomNavigation
            value={value}
            onChange={handleChange}
            sx={{
               backgroundColor: "transparent",
               color: "white",
               gap: "10px",
            }}
         >
               <BottomNavigationAction
                  sx={{
                     color: "white",
                     width: "20px",
                     display: { xs: "block", sm: "block", md: "none" },
                  }}
                  label="Inicio_"
                  value="/home"
                  icon={<CottageOutlinedIcon />}
               />

            <BottomNavigationAction
               sx={{
                  color: "white",
                  width: "20px",
                  display: { xs: "block", sm: "block", md: "none" },
               }}
               label="Tickets"
               value="/tickets"
               icon={<LocalActivityOutlinedIcon />}
            />
            <BottomNavigationAction
               sx={{
                  color: "white",
                  width: "20px",
                  display: { xs: "block", sm: "block", md: "none" },
               }}
               label="Search"
               value="/search"
               icon={<SearchIcon />}
            />
            <BottomNavigationAction
               sx={{
                  color: "white",
                  width: "20px",
                  display: { xs: "block", sm: "block", md: "none" },
               }}
               label="account"
               value="/account"
               icon={<AccountCircleOutlinedIcon />}
            />
         </BottomNavigation>
      </Box>
   );
};

export default Footer;
