import React, { useState } from 'react'

import '../App.css'

function ToDoSearch({ list, setList, query, setQuery }) {
  const addTodo = (text) => {
    text.preventDefault();
    const firstList = [
      ...list,
      { id: list.length + 1, query: query, isDone: false, exist: true },
    ];
    setList(firstList);
  };

  return (
    <div className="top">
      <form onSubmit={addTodo}>
        <input
          type="text"
          id="search-bar"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a new task..."
        />
      </form>
    </div>
  );
}

export default ToDoSearch