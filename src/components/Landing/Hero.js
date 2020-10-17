import React from "react";
import "./Hero.css";
import logo from "../../img/logo.png";
import { Button } from "@material-ui/core";

function Hero() {
  return (
    <div className="section hero">
      <div className="hero__content">
        <img src={logo} alt="" className="hero__logo" />
        <h1>
          Italian-inspired <br /> homemade pizza{" "}
        </h1>
        <p>
          We deliver them door to door so you can enjoy right in the comforts of
          your home. Available in 6 yummy variants perfect for sharing with your
          family and friends.
        </p>
        <div className="hero__options">
          <Button className="hero__orderButton">order now</Button>
          <Button className="hero__contactButton">contact us</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
