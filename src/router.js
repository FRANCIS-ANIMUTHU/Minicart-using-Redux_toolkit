import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import React, { useState } from "react";
import App from "./App";
import Form from "./form";
import Cart from "./Cart";
import { Provider } from "react-redux/es/exports";
import Store from "./Store";
import Favorite from "./Favorite";

export default function router() {
  
  
  return (
    <div style={{ backgroundColor: "khaki", width: "100%", height: "100vh" }}>
      <Provider store={Store}>
      <BrowserRouter>
        <ul style={{ backgroundColor: "yellow", padding: "3%" }}>
          <li
            style={{ listStyle: "none", textAlign: "center", fontSize: "30px" }}
          >
            <Link
              to="/form"
              style={{ marginLeft: "2%", textDecoration: "none" }}
            >
              Login
            </Link>
            <Link
              to="/App"
              style={{ marginLeft: "4%", textDecoration: "none" }}
            >
              App
            </Link>
            <Link
              to="/Cart"
              style={{ marginLeft: "4%", textDecoration: "none" }}
            >
              Cart
            </Link>
            <Link
              to="/Favorite"
              style={{ marginLeft: "4%", textDecoration: "none" }}
            >
              Favoirite
            </Link>
          </li>
        </ul>
        
          <Routes>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/App" element={<App />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Favorite" element={<Favorite/>}></Route>
          </Routes>
      </BrowserRouter>
      </Provider>

    </div>
  );
}
