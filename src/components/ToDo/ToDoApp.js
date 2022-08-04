// import { List } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import iconMoon from "../../assets/icon-moon.svg";
import iconSun from "../../assets/icon-sun.svg";
import ToDoSearch from "./ToDoSearch";
import ToDoList from "./ToDoList";
import BottomList from "./BottomList";

import "../../dark.css";
import "../../light.css";

function ToDoApp() {
  const [query, setQuery] = useState();

  const [list, setList] = useState([
    // { id: 0, query: query, isDone: false, exist: true },
  ]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.getItem("list");
  }, [list]);

  const [inputTarea, setInputTarea] = useState([]);
  const showSearch = () => {
    setInputTarea((students) => [
      ...inputTarea,
      // <ToDoContainer theme={theme} toggleTheme={toggleTheme} />,
      <ToDoSearch
        list={list}
        setList={setList}
        query={query}
        setQuery={setQuery}
      />,
    ]);
  };

  return (
    <>
      <div className="wrapper">
        <ToDoList
          list={list}
          setList={setList}
          query={query}
          setQuery={setQuery}
        />
        <button onClick={showSearch}>+ nueva tarea</button>
        <div className="container">{inputTarea.map((uno) => uno)}</div>

        <BottomList list={list} setList={setList} />
      </div>
    </>
  );
}

export default ToDoApp;
