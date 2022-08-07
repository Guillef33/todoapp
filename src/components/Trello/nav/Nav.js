import React, { useState, useContext } from "react";
import PopUpNav from "./PopUp-Nav";

import { UserContext } from "../../../context/UserContext";

import "./PopUpNav.css";
import "../Nav.css";

function Nav() {

  const {
  logout,
  } = useContext(UserContext);

  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <nav className="nav-container">
      <div>Mi Empresa</div>
      <ul className="nav-center">
        <li>Mi Equipo</li>
        <li>Mi perfil</li>
        <li>Invitar gente</li>
      </ul>
      <ul className="nav-right">
        <li onClick={(e) => setShowPopUp(!showPopUp)}>Menu</li>
        <PopUpNav showPopUp={showPopUp} />
        <li>Aplicaciones</li>
      </ul>
      <ul>
        <li onClick={logout}>LogOut</li>
      </ul>
    </nav>
  );
}

export default Nav;
