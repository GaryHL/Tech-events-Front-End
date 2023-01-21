import { Button, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";

const Recomended = () => {
   const StyledImg = styled("img")({
      borderRadius: "3px",
      width: "100%",
   });

   const friends = [
      {
         id: "1",
         userName: "Nicolas",
         user_img:
            "https://imgs.search.brave.com/NwsUjArw9SU1GtV4bzh3EhKTdN2bw1N_K5Ws1d_ktS4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/bVFIYloxOUNlMTR6/ZVpIQ3lkWFBRSGFI/YSZwaWQ9QXBp",
      },
      {
         id: "2",
         userName: "Midu",
         user_img:
            "https://imgs.search.brave.com/NwsUjArw9SU1GtV4bzh3EhKTdN2bw1N_K5Ws1d_ktS4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/bVFIYloxOUNlMTR6/ZVpIQ3lkWFBRSGFI/YSZwaWQ9QXBp",
      },
      {
         id: "3",
         userName: "hacker",
         user_img:
            "https://imgs.search.brave.com/NwsUjArw9SU1GtV4bzh3EhKTdN2bw1N_K5Ws1d_ktS4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/bVFIYloxOUNlMTR6/ZVpIQ3lkWFBRSGFI/YSZwaWQ9QXBp",
      },
      {
         id: "4",
         userName: "hacker",
         user_img:
            "https://imgs.search.brave.com/NwsUjArw9SU1GtV4bzh3EhKTdN2bw1N_K5Ws1d_ktS4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/bVFIYloxOUNlMTR6/ZVpIQ3lkWFBRSGFI/YSZwaWQ9QXBp",
      },
      {
         id: "5",
         userName: "hacker",
         user_img:
            "https://imgs.search.brave.com/NwsUjArw9SU1GtV4bzh3EhKTdN2bw1N_K5Ws1d_ktS4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/bVFIYloxOUNlMTR6/ZVpIQ3lkWFBRSGFI/YSZwaWQ9QXBp",
      },
   ];

   const [recomended, setRecomended] = useState([]);

   useEffect(() => {
      setRecomended(friends.sort((a, b) => Math.random() - 0.5));
      setRecomended(friends.slice(0,3));
   }, []);

   return (
      <>
         <Stack
            sx={{
               flexDirection: "row",
               gap: "1rem",
               mt: "1rem",
               overflowX: "scroll",
               // overflow:'hidden',
            }}
         >
            {recomended.map((item) => {
               return (
                  <Paper
                     key={item.id}
                     sx={{
                        backgroundColor: "basics.backgroundLigth",
                        p: "1rem",
                     }}
                     elevation={3}
                  >
                     <Stack sx={{ width: { xs: "150px" }, gap: "1rem" }}>
                        <StyledImg src={item.user_img}></StyledImg>
                        <Typography color="basics.white">
                           {item.userName}
                        </Typography>
                        <Button
                           color="primary"
                           variant="contained"
                           sx={{ p: "0px", width: "100%" }}
                        >
                           Add friend
                        </Button>
                     </Stack>
                  </Paper>
               );
            })}
         </Stack>
      </>
   );
};

export default Recomended;
