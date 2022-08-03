import React, { useState } from "react";

import iconCheck from "../assets/icon-check.svg";
import iconCross from "../assets/icon-cross.svg";
import "../dark.css";
import "../light.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ToDoList({ list, setList, query }) {
  const [tareas, updateTareas] = useState(list);

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

  console.log(list);
  // console.log(tareas);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(list);
    const [reordererItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordererItem);

    setList(items);
  }

  return (
    <div className="list">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tareas">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {list.map((item, index) => {
                return (
                  <Draggable
                    key={item.id}
                    draggableId={item.query}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="listado-tareas"
                        key={item.id}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {provided.placeholder}

                        <div
                          onClick={() => markItem(index)}
                          className={
                            item.isDone ? "button-completed" : "button-circle"
                          }
                        >
                          <img
                            src={iconCheck}
                            alt="icon-cross"
                            className={item.isDone ? "done" : "notDone"}
                          />
                        </div>
                        <li
                          key={index}
                          className={
                            item.isDone ? "underline-done" : "list-text"
                          }
                        >
                          {item.query}{" "}
                        </li>
                        <img
                          src={iconCross}
                          alt="icon-cross"
                          onClick={() => handleRemove(item)}
                          className="button-cross"
                        />
                        {provided.placeholder}
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default ToDoList;
