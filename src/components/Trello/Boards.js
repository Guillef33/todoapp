import React, { useState } from "react";

import Title from "./Title";
import Task from "./Task";

import "./Home.css";

function Boards() {
  const [boards, setBoard] = useState([]);

  const showSearch = () => {
    setBoard((board) => [...boards, <Task />]);
  };
  return (
    <div className="list-header">
      <Title />
      <div className="title-container">
        <div className="title-row">{boards.map((uno) => uno)}</div>
        <button onClick={showSearch} className="button-add">
          + Añada una tarjeta
        </button>
      </div>
    </div>
  );
}

export default Boards;
