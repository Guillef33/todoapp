// import { List } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import "../../dark.css";
import "../../light.css";
import ListOfTitles from "./ListOfTitles";

function Home() {
  const [newList, setNewList] = useState([]);

  const showNewList = () => {
    setNewList((titles) => [...newList, <ListOfTitles />]);
  };

  return (
    <div className="container">
      <div className="newList-container">{newList.map((uno) => uno)}</div>
      <button onClick={showNewList}>+ nuevo board</button>
    </div>
  );
}

export default Home;
