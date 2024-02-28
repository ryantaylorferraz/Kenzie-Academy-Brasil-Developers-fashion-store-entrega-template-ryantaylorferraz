import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MovieProvider } from "./providers/movieContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);
