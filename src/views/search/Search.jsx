import React from "react";
import SearchTable from "../../components/searchTable/SearchTable";
import { Box } from "@mui/system";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Search = () => {
   return (
      <>
         <Box
            sx={{
               backgroundColor: "#0D0D0D",
               minHeight: "100vh",
               px: "5%",
               position: "relative",
            }}
         >
            <Navbar />
            <SearchTable />
         </Box>
         <Footer />
      </>
   );
};

export default Search;
