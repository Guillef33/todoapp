import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import LogoWhite from "../../assets/header-logo-white.gif";

import "./HeaderDashboard.css";

import { Navigate, useNavigate, Route } from "react-router-dom";

function HeaderDashboard() {
  let navigate = useNavigate();

  return (
    <nav className="dashboard-header-container">
      <img
        src={LogoWhite}
        alt="Trello Logo"
        className="logo-trello"
        onClick={() => navigate("/")}
      />
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

export default HeaderDashboard;
