import React, { useState } from "react";
import PopUpNav from "./PopUp-Nav";

import "./PopUpNav.css";
import "../Nav.css";

function Nav() {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className="nav-container">
      <div>Mi table</div>
      <div>
        <span>800 Golpes Enero</span>
        <span>Mi perfil</span>
        <span>Invitar gente</span>
      </div>
      <div>
        <span onClick={(e) => setShowPopUp(true)}>Menu</span>
        <PopUpNav className={showPopUp ? "popup-nav" : "popup-hide"} />
        <span>Aplicaciones</span>
      </div>
    </div>
  );
}

export default Nav;
