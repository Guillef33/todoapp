import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import "./Header.css";

function HeaderMain() {
  return (
    <nav className="main-header-container">
      <div>Trello Clone</div>
      <ul className="main-header-right">
        <Link to="/login">Log In</Link>
        <Link to="/register">Get Trello for Free</Link>
      </ul>
    </nav>
  );
}

export default HeaderMain;
