import React from "react";
import logo from "../Images/jklogo.png";

function Header() {
  return (
    <div className="header">
      <div>
        <img src={logo} className="small" alt="logo" />
      </div>
      <h1 className="heading">KEEP</h1>
    </div>
  );
}

export default Header;
