import React from "react";

import iconCheck from "../assets/icon-check.svg";
import iconCross from "../assets/icon-cross.svg";
import '../dark.css';
import "../light.css";

function ToDoList({ list, setList }) {
  /////////// Crear una funcion que cree ids unicos, con letras y numeros /////////////////////////
  const handleRemove = (index) => {
    console.log(index);
    const newList = list.filter((item) => item.id !== index.id);
    setList(newList);
  };

  const markItem = (index) => {
    const newListComplete = [...list];
    newListComplete[index].isDone = !list[index].isDone;
    setList(newListComplete);
  };

  return (
    <div className="list">
      <ul>
        {list.map((item, index) => {
          return (
            <div className="listado-tareas" key={item.id}>
              <div
                onClick={() => markItem(index)}
                className={item.isDone ? "button-completed" : "button-circle"}
              >
                <img
                  src={iconCheck}
                  alt="icon-cross"
                  className={item.isDone ? "done" : "notDone"}
                />
              </div>
              <li
                key={index}
                className={item.isDone ? "underline-done" : "list-text"}
              >
                {item.query}{" "}
              </li>
              <img
                src={iconCross}
                alt="icon-cross"
                onClick={() => handleRemove(item)}
                className="button-cross"
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
