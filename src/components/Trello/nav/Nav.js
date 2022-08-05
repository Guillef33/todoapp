import React, { useState } from "react";
import PopUpNav from "./PopUp-Nav";

import "./PopUpNav.css";
import "../Nav.css";

function Nav() {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <nav className="nav-container">
      <div>Mi table</div>
      <ul className="nav-center">
        <li>Equipo</li>
        <li>Mi perfil</li>
        <li>Invitar gente</li>
      </ul>
      <ul className="nav-right">
        <li onClick={(e) => setShowPopUp(!showPopUp)}>Menu</li>
        <PopUpNav showPopUp={showPopUp} />
        <li>Aplicaciones</li>
      </ul>
    </nav>
  );
}

export default Nav;
