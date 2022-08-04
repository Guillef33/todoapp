import React, { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import iconCheck from "../../assets/icon-check.svg";
import iconCross from "../../assets/icon-cross.svg";
import Edit from "../../assets/free_icon_1.svg";

function List({
  list,
  setList,
  markItem,
  handleRemove,
  isEditing,
  setIsEditing,
}) {
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(list);
    const [reordererItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordererItem);
    setList(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tareas">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.query} index={index}>
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
                        className={item.isDone ? "underline-done" : "list-text"}
                      >
                        {item.query}{" "}
                      </li>
                      <img
                        src={Edit}
                        onClick={(e) => setIsEditing(true)}
                        alt="editing-icon"
                        className="icon-editing"
                      />
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
  );
}

export default List;
