import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import LogoWhite from "../assets/header-logo-white.gif";

import { Navigate, useNavigate, Route } from "react-router-dom";

import "./HeaderBoards.css";

function HeaderBoards({ color }) {
  console.log(color);

  let navigate = useNavigate();
  return (
    <nav className="boards-header-container" style={{ backgroundColor: color }}>
      <img
        src={LogoWhite}
        alt="Trello Logo"
        className="logo-trello"
        onClick={() => navigate("/dashboard")}
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

export default HeaderBoards;
