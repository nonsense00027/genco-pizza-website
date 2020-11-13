import React from "react";
import "./Side.css";
import logo from "../../img/logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Side() {
  return (
    <div className="side">
      <img src={logo} alt="" />
      <div className="side__socialMedias">
        <FacebookIcon className="side__socialMedia" />
        <InstagramIcon className="side__socialMedia" />
        <TwitterIcon className="side__socialMedia" />
      </div>
    </div>
  );
}

export default Side;
