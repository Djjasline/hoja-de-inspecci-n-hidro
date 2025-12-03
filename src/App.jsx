// index.jsx (ejemplo típico)
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HojaInspeccionHidro from "./components/HojaInspeccionHidro";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HojaInspeccionHidro />
  </React.StrictMode>
);
