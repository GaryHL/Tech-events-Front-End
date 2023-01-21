import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Slider = () => {
   const items = [
      {
         id: 1,
         title: "tech Week",
         date: "sab10",
         place: "plaza algo",
         price: "GRATIS",
         img: "https://imgs.search.brave.com/qnV8Jb1GHCgy4nL7czHETMsrSvdpj8tSTpsSieiLwLw/rs:fit:888:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/VVR0ZzVBVHhhcFJf/dTROdjdNd2NBSGFE/OSZwaWQ9QXBp",
      },
      {
         id: 2,
         title: "fiestaa",
         date: "sab10",
         place: "plaza algo",
         price: "GRATIS",
         img: "https://imgs.search.brave.com/nvMgZLj0VTtxyxfZjlX0gbWogpM8nn482vQT4wyDS2c/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/VHJjLXg3RkFKcEUt/UEdCb25TYmJBSGFF/NyZwaWQ9QXBp",
      },
      {
         id: 3,
         title: "perrito",
         date: "sab10",
         place: "plaza algo",
         price: "GRATIS",
         img: "https://imgs.search.brave.com/aArm4YWc6ECJo1LjAN5GR1iTVb-gtaZxs_z22efKr5c/rs:fit:634:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/cWoxSk1yLVJqUjlM/TU1SNEx3NU1nSGFG/aSZwaWQ9QXBp",
      },
   ];

   const [itemSelected, setItemSelected] = useState(0);

   const handleNext = () => {

      if (itemSelected < items.length - 1) {
         setItemSelected(itemSelected + 1);
      }
      else {
         setItemSelected(0);
      }
   };
   
   setTimeout(handleNext, 5000);

   return (
      <>
         <Stack
            flexDirection="column"
            sx={{
               width: "100%",
               height: "100%",
               borderRadius: "10px",
               justifyContent: "flex-end",
               objetctFit: "cover",
               position: "relative",
            }}
         >
            <motion.img
               initial={{
                  opacity: 0,
               }}
               animate={{
                  opacity: 1,
               }}
               src={items[itemSelected].img}
               style={{
                  background: "100%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  zIndex: "2",
                  borderRadius: "10px",
                  backgrounPosition: 'center',
               }}
            ></motion.img>

            <Box
               sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  zIndex: "2",
                  borderRadius: "10px",
                  background:
                     "linear-gradient(0deg, #000000 0%, rgba(0,0,0,0) 100%)",
               }}
            ></Box>
            <Stack margin="1rem" zIndex="3" flexDirection="column" gap="0.5rem">
               <Typography color="basics.white" variant="h5">
                  {items[itemSelected].title}
               </Typography>
               <Typography color="basics.white" variant="p">
                  {items[itemSelected].place}
               </Typography>
               <Typography color="basics.white" variant="p">
                  {items[itemSelected].date}
               </Typography>
               <Stack
                  sx={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                  }}
               >
                  <Typography color="basics.white" variant="h6">
                     GRATIS
                  </Typography>
               </Stack>
            </Stack>
         </Stack>
      </>
   );
};

export default Slider;
