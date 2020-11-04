import React from "react";
import "./Sidebar.css";
import { useStateValue } from "../../DataLayer";
import { useParams } from "react-router-dom";
import logo from "../../img/logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Sidebar() {
  const { category } = useParams();
  const [{ categories }, dispatch] = useStateValue();
  console.log("category params", category);

  return (
    <div className="sidebar">
      {/* <h1>Sidebar component</h1> */}

      <img src={logo} alt="" className="sidebar__logo" />

      <div className="sidebar__categories">
        {categories.map(({ name, id }) => (
          <h2 className={name.toLowerCase() == category && `active`} key={id}>
            {name}
          </h2>
        ))}
      </div>

      <div className="sidebar__socialMedias">
        <FacebookIcon className="sidebar__socialMedia" />
        <InstagramIcon className="sidebar__socialMedia" />
        <TwitterIcon className="sidebar__socialMedia" />
      </div>
    </div>
  );
}

export default Sidebar;
