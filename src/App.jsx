import "./App.css";
import Router from "./router/Router";
// import ThemeProvider from "@mui/material";
// import ThemeProvider from "@mui/system";
import { ThemeProvider} from "@mui/material";
import theme from './config/themeConfig'

function App() {
   return (
      <ThemeProvider theme={theme}>
         <div className="App">
            <Router></Router>
         </div>
      </ThemeProvider>
   );
}

export default App;
