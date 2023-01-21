import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#08D698',
      },
      secondary:{
        main:'#ffffff',
      },
      basics:{
        backgroundLigth: '#111111',
        background:'#0D0D0D',
        white:'#fff',
      },
      error:{
        main:'#D60846',
      },
      success:{
        main:'#08D698',
      },
      warning:{
        main:'#D68408',
      },
      red:{
        main:'#cf1010',
      }
    },
  });
export default theme;