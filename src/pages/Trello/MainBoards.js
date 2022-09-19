// import { List } from "@material-ui/core";
import React, { useState } from "react";

import "../../dark.css";
import "../../light.css";
import Boards from "./Boards";
import "../../App.css";

import HeaderBoards from "../../global/HeaderBoards";

function MainBoards() {
  const [newList, setNewList] = useState([]);

  const showNewList = () => {
    setNewList((titles) => [...newList, <Boards />]);
    localStorage.setItem("boards", JSON.stringify(newList));
  };

  return (
    <>
      {/* <Nav /> */}
      <HeaderBoards color='black' />
      <div className="board-container">
        <div className="list-container">{newList.map((uno) => uno)}</div>
        <button onClick={showNewList} className="button-add">
          + Añada otra lista
        </button>
      </div>
    </>
  );
}

export default MainBoards;
