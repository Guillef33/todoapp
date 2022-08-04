import React, { useState } from "react";

import ToDoApp from "./ToDoApp";
import DarkMode from "./darkMode";
import Title from "../Trello/Title";

function ToDoContainer({ theme, toggleTheme }) {
  return (
    <>
      <div className="App" id={theme}>
        <div className="header">
          {/* <h2>TODO</h2> */}
          <Title />
          <div className="switch">
            <DarkMode theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
        <ToDoApp />
      </div>
    </>
  );
}

export default ToDoContainer;
