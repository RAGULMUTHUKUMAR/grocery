import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/globals.css";
import App from "./app/App";
import AppProviders from "./app/providers/AppProviders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProviders>
      <App />
  </AppProviders>
);
