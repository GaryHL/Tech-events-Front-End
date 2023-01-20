import {
   BottomNavigation,
   BottomNavigationAction,
   Button,
   Box,
   Stack,
   Typography,
} from "@mui/material";
import React from "react";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();
    console.log(location.pathname)

   const [value, setValue] = useState('home');
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   useEffect(() => {
    setValue(location.pathname)
   }, [location])
   

   return (
      <Stack
         flexDirection="row"
         alignItems="center"
         pt='5vh'
         height="7vh"
         justifyContent="space-between"
      >
         <Box>
            <Link
               to="/home"
               style={{ outline: "none", textDecoration: "none" }}
            >
               <Typography color="secondary" variant="h5" underline="none">
                  Tech Events
               </Typography>
            </Link>
         </Box>
         <Box>
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
                     display: { xs: "none", sm: "none", md: "block" },
                  }}
                  label="Inicio_"
                  value="/home"
                  icon={<CottageOutlinedIcon />}
               />

               <BottomNavigationAction
                  sx={{
                     color: "white",
                     width: "20px",
                     display: { xs: "none", sm: "none", md: "block" },
                  }}
                  label="Tickets"
                  value="/tickets"
                  icon={<LocalActivityOutlinedIcon />}
               />
               <BottomNavigationAction
                  sx={{
                     color: "white",
                     width: "20px",
                     display: { xs: "none", sm: "none", md: "block" },
                  }}
                  label="account"
                  value="/account"
                  icon={<AccountCircleOutlinedIcon />}
               />
               <BottomNavigationAction
                  sx={{ color: "white", width: "20px" }}
                  label="Settings"
                  value="/settings"
                  icon={<SettingsOutlinedIcon />}
               />
            </BottomNavigation>
         </Box>
      </Stack>
   );
};

export default Navbar;
