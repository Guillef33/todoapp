import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import LogoWhite from "../assets/header-logo-white.gif";

import { Navigate, useNavigate, Route } from "react-router-dom";

import SearchHeader from "./SearchHeader";

import "./HeaderBoards.css";

import PopUpNav from "../pages/Trello/nav/PopUp-Nav";

function HeaderBoards({ color }) {
  const [newBoard, setNewBoard] = useState(false);

  const [showPopUp, setShowPopUp] = useState(false);

  console.log(showPopUp);

  let navigate = useNavigate();

  const createBoard = () => {
    setNewBoard(true);
    // setShowPopUp(true);
  };

  return (
    <nav className="boards-header-container" style={{ backgroundColor: color }}>
      <img
        src={LogoWhite}
        alt="Trello Logo"
        className="logo-trello"
        onClick={() => navigate("/dashboard")}
      />
      <ul className="main-header-left">
        <Link to="/features">Espacios de trabajo</Link>
        <Link to="/solutions">Reciente</Link>
        <Link to="/plans">Marcado</Link>
        <Link to="/pricing">Plantillas</Link>
        <button onClick={(e) => setShowPopUp(!showPopUp)}>Crear</button>
        <PopUpNav showPopUp={showPopUp} />
        <Link to="/resources">Resources</Link>
      </ul>
      <ul className="search-right-section">
        <SearchHeader />
      </ul>
    </nav>
  );
}

export default HeaderBoards;
