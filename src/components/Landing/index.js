import React from "react";
import "../../css/Landing.css";
import Hero from "./Hero";
import Specials from "./Specials";
import { useStateValue } from "../../DataLayer";

function index() {
  return (
    <div className="landing">
      {/* Hero */}
      <Hero />

      {/* Statistics */}

      {/* Specialty */}
      <Specials />

      {/* Location */}

      {/* Footer */}
    </div>
  );
}

export default index;
