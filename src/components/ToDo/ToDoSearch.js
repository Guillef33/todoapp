import React, { useState } from "react";

import iconCheck from "../../assets/icon-check.svg";
import iconCross from "../../assets/icon-cross.svg";

import "../../dark.css";
import "../../light.css";

import "../../App.css";

function ToDoSearch({ list, setList, query, setQuery }) {
  const [error, setError] = useState("");

  const addTodo = (text) => {
    text.preventDefault();
    if (query === "" || query === undefined || query === null) {
      setError("Debes ingresar un texto");
    } else {
      const firstList = [
        ...list,
        { id: list.length + 1, query: query, isDone: false, exist: true },
      ];
      setList(firstList);
      setError("");
    }
  };

  return (
    <div className="top">
      <form onSubmit={addTodo}>
        <div className="button-circle"></div>
        <input
          type="text"
          id="search-bar"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a new task..."
        />
        <p className="error-form">{error}</p>
      </form>
    </div>
  );
}

export default ToDoSearch;
