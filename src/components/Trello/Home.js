// import { List } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import "../../dark.css";
import "../../light.css";
import Boards from "./Boards";
import "../../App.css";

function Home() {
  const [newList, setNewList] = useState([]);

  const showNewList = () => {
    setNewList((titles) => [...newList, <Boards />]);
    localStorage.setItem("boards", JSON.stringify(newList));
  };

  console.log(newList);

  // const getCircularReplacer = () => {
  //   const seen = new WeakSet();
  //   return (key, value) => {
  //     if (typeof value === "object" && value !== null) {
  //       if (seen.has(value)) {
  //         return;
  //       }
  //       seen.add(value);
  //     }
  //     return value;
  //   };
  // };

  function getLocalStorage() {
    const items = JSON.parse(localStorage.getItem("boards"));
    if (items) {
      setNewList(items);
    }
  }

  //   getLocalStorage();

  return (
    <div className="board-container">
      <div className="list-container">{newList.map((uno) => uno)}</div>
      <button onClick={showNewList} className="button-add">
        + Añada otra lista
      </button>
    </div>
  );
}

export default Home;
