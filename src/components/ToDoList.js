import React from 'react'
import ToDoSearch from './ToDoSearch';

import iconCheck from "../assets/icon-check.svg";
import iconCross from "../assets/icon-cross.svg";

function ToDoList({list, setList}) {
  /////////// Funciona mal, creo que tiene que ver con el modo que incrementamos el id del item respecto al index /////////////////////////
  const handleRemove = (index) => {
    console.log(index);
    const newList = list.filter((item) => item.id !== index);
    console.log(newList);
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
            <div className="listado-tareas">
              <div
                onClick={() => markItem(index)}
                className={item.isDone ? "button-completed" : "button-circle"}
              >
                <img
                  src={iconCheck}
                  alt="icon-cross"
                  // onClick={() => handleRemove(index)}
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
                onClick={() => handleRemove(index)}
                className="button-cross"
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList