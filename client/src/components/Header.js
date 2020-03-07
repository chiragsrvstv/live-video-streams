import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth.js";
import "../stylesheets/app.css"

const Header = () => {
  return (
    <div className="header-menu">
      <div className="ui menu">
        <Link to="/" className="item">
          Acidy Streams 
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth className="item" />
        </div>
      </div>
    </div>
  );
};

export default Header;
