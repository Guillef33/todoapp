import React, { useState } from "react";

import Edit from "../../assets/free_icon_1.svg";

import "./Nav.css";
import "./Home.css";

function Title() {
  const [query, setQuery] = useState();
  const [isEditing, setIsEditing] = useState(true);
  const [iconShow, setIconShow] = useState(false);

  const [task, setTask] = useState("");

  const addTitle = (text) => {
    text.preventDefault();
    if (query === "" || query === undefined || query === null) {
      //   setError("Debes ingresar un texto");
    } else {
      setTask(query);
      //   setError("");
      setIsEditing(false);
    }
  };

  return (
    <div className="header-list">
      {isEditing ? (
        <>
          <form onSubmit={addTitle} className="task-editor">
            <input
              type="text"
              id="edit-task"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Introduzca el titulo para esta tarjeta..."
            />
          </form>
        </>
      ) : (
        <div
          className="task-wrapper"
          onMouseEnter={() => setIconShow(true)}
          onMouseLeave={() => setIconShow(false)}
        >
          <h2 onClick={(e) => setIsEditing(true)}>{task}</h2>

          {iconShow ? (
            <img
              src={Edit}
              onClick={(e) => setIsEditing(true)}
              alt="editing-icon"
              className="icon-editing"
            />
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default Title;
