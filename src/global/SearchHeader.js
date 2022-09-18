import React from "react";

import IconMoon from "../assets/favicon-32x32.png";
import Profile from "../assets/profile-pic.png";

import './HeaderBoards.css';

function SearchHeader() {
  return (
    <>
      <input type="text" placeholder="Buscar" />
      <div className="search-nav-profile-section">
        <img src={IconMoon} alt="icon-info" />
        <h1>!</h1>
        <img src={Profile} alt="profile-pic" />
      </div>
    </>
  );
}

export default SearchHeader;
