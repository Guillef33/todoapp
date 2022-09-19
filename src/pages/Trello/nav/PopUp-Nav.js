import React from "react";

import "./PopUpNav.css";

function PopUpNav({ showPopUp }) {
  return (
    <div className={showPopUp ? "popup-nav" : "popup-hide"}>PopUp-Nav</div>
  );
}

export default PopUpNav;
