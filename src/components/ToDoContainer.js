import React, { useState } from "react";

import ToDoApp from "./ToDoApp";
import DarkMode from "./darkMode";

function ToDoContainer({ theme, toggleTheme }) {
  return (
    <>
      <div className="App" id={theme}>
        <div className="header">
          <h2>TODO</h2>
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
