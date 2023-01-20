import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Box, Stack, Typography } from "@mui/material";
import Slider from "../../components/slider/Slider";

const Home = () => {
   return (
      <>
         <Box sx={{ backgroundColor: "#0D0D0D", minHeight: "100vh", px: "5%" }}>
            <Navbar />
            <Stack
               sx={{
                   display:"grid",
                gridTemplateColumns:{xs:'100%', xm:'100%', md:"50% 50%" },
                mt:'5vh',
                width:"100%",
                gap:"16px",
               }}
            >
               <Box height='320px'>
                  <Slider />
               </Box>
               <Box
                  sx={{ display: { xs: "none", sm: "none", md: "block" } }}
               >
                  <Typography color="basics.white">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Quae aspernatur nesciunt eum voluptate illo, necessitatibus
                     beatae nam, cum repellat sapiente labore impedit saepe
                     ducimus aperiam, blanditiis quod hic quaerat id?
                  </Typography>
               </Box>
            </Stack>
         </Box>
      </>
   );
};

export default Home;
