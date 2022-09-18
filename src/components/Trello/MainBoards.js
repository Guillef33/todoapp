// import { List } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import "../../dark.css";
import "../../light.css";
import Boards from "./Boards";
import "../../App.css";

import Nav from "./nav/Nav";

import HeaderBoards from "./nav/HeaderBoards";

function MainBoards() {
  const [newList, setNewList] = useState([]);

  const showNewList = () => {
    setNewList((titles) => [...newList, <Boards />]);
    localStorage.setItem("boards", JSON.stringify(newList));
  };

  return (
    <>
      {/* <Nav /> */}
      <HeaderBoards />
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