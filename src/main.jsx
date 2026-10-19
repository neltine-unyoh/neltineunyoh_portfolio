import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/variables.css";
import "./styles/global.css";

// Normal builds use clean URLs (/work/kora).
// `npm run build:preview` uses #/ URLs so the site works on hosts without rewrite rules.
const Router = import.meta.env.VITE_HASH_ROUTER === "1" ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
