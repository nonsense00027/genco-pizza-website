import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <img
        src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/102430784_574018229975321_4710178038582351251_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_eui2=AeGiyOpEYW0hRHRbYbvSL38vs4VrbT8Tou2zhWttPxOi7WR16uJ6x8GvZBGmZrz-fuJzY7bjtWDYp_67OiD3HVgy&_nc_ohc=H9i-2RhfqiYAX8c7dcV&_nc_ht=scontent.fmnl4-1.fna&oh=2049bbd4ac7a6dbf13227e43d1aceaee&oe=5F8E7812"
        alt=""
        className="header__logo"
      />

      <div className="header__nav">
        <div className="header__option">Sign In</div>
        <div className="header__option">Orders</div>
        <div className="header__option">Cart</div>
      </div>
    </div>
  );
}

export default import("@material-ui/core").Header;
