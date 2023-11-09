import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Search from "./components/Search.jsx";
import Nav from "./components/Nav.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App 
        search={<Search />}
        nav={<Nav />}
      />
    </BrowserRouter>
  </React.StrictMode>
);
