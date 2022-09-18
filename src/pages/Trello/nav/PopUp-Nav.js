import React from 'react'

function PopUpNav({ showPopUp }) {
  return (
    <div className={showPopUp ? "popup-nav" : "popup-hide"}>PopUp-Nav</div>
  );
}

export default PopUpNav;
