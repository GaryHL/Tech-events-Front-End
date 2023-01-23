import { Grid, Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import React from "react";
import { styled } from "@mui/material";

const CardEvent = () => {
   const ContainerCard = styled(Stack)({
      height: "4rem",
      my: "1rem",
      cursor: "pointer",
      gap:'1rem',
      userSelect:'none',
      transition:'0.4s',
      "&:hover": {scale:'1.01'},

   });
   const handleClick = () => {
      console.log("click ");
   };
   return (
      <ContainerCard
         flexDirection="row"
         justifyContent="space-between"
         gap="1rem"
         onClick={handleClick}
      >
         <ContainerCard />
         <Box sx={{ width: "20%" }}>
            <img
               style={{
                  height: "100%",
                  aspectRatio: "1/1",
                  borderRadius: "10px",
               }}
               src="https://imgs.search.brave.com/RM2D1jjlZfbvFJ64GeiI6mjNwjLIj0UOqdQdEfLYh2I/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/bFprMVpsZThsRWdW/aUJmQ2RVd0lnSGFF/SyZwaWQ9QXBp"
            ></img>
         </Box>
         <Stack
            flexDirection="column"
            justifyContent="space-around"
            sx={{ width: "60%" }}
         >
            <Typography
               variant="p"
               sx={{ fontSize: "1.2rem" }}
               color="secondary"
            >
               TTitulo de la busqueda
            </Typography>
            <Typography
               variant="p"
               sx={{ fontSize: "0.9rem" }}
               color="secondary"
            >
               Detalles del evento
            </Typography>{" "}
         </Stack>
         <Stack flexDirection="row" sx={{ width: "20%" }}>
            <PeopleAltOutlinedIcon
               color="primary"
               sx={{ width: "50%", marginTop: "0.5rem" }}
            />
            <Typography
               color="primary"
               sx={{ width: "50%", marginTop: "0.5rem" }}
            >
               0/20
            </Typography>
         </Stack>
      </ContainerCard>
   );
};

export default CardEvent;
