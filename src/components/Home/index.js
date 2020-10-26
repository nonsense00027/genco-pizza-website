import React from "react";
import "../../css/Home.css";
import Sidebar from "./Sidebar";
import Products from "./Products";

function index() {
  return (
    <div className="home">
      <h1>Home component</h1>
      <Sidebar />
      <Products />
    </div>
  );
}

export default index;
