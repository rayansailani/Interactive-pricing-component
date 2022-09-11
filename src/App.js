import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import Content from "./Components/Content";

const theme = createTheme({
  typography: {
    fontFamily: "Manrope",
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
};

export default App;
