import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/trelloLogo.png";

import "./Header.css";

function HeaderMain() {
  return (
    <nav className="main-header-container">
      <img src={Logo} alt="Trello Logo" className="logo-trello" />
      <ul className="main-header-left">
        <Link to="/features">Features</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/resources">Resources</Link>
      </ul>
      <ul className="main-header-right">
        <Link to="/auth/login">Log In</Link>
        <Link to="/auth/register" className="get-trello-button">
          Get Trello for Free
        </Link>
      </ul>
    </nav>
  );
}

export default HeaderMain;
