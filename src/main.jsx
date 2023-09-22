import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { theme } from "@/shared/styles/theme";
import { GlobalStyles } from "@/shared/styles/GlobalStyles.js";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <ToastContainer autoClose={2000} />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
