import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import Products from "./Products";

function index() {
  return (
    <div className="home">
      <Sidebar />
      <Products />
    </div>
  );
}

export default index;
