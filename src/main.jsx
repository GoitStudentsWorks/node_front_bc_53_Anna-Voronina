import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@/shared/styles/theme";
import { GlobalStyles } from "@/shared/styles/GlobalStyles.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
