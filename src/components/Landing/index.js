import React from "react";
import "../../css/Landing.css";
import Hero from "./Hero";
import Specials from "./Specials";
import Location from "./Location";
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
      <Location></Location>
      {/* Footer */}
    </div>
  );
}

export default index;
