//color pallete
//1. black = #000000
//1. white = #FFFFFF
//1. sonic silver = #7C7A7A
//1. davy rose = #FF5D73 , like red
//4. davys grey = #494949

//bootstrap min.css
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
