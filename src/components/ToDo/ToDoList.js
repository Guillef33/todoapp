import React, { useState } from "react";

import Editor from "./Editor";
import List from "./List";

import "../../dark.css";
import "../../light.css";

function ToDoList({ list, setList, query, setQuery, error }) {
  const [isEditing, setIsEditing] = useState(false);

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
      {isEditing ? (
        <>
          {/* <h2>Hola</h2> */}
          <Editor
            query={query}
            setQuery={setQuery}
            error={error}
            list={list}
            setList={setList}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </>
      ) : (
        <List
          list={list}
          setList={setList}
          markItem={markItem}
          handleRemove={handleRemove}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default ToDoList;
