import React, { useState } from "react";

import iconCheck from "../../assets/icon-check.svg";
import iconCross from "../../assets/icon-cross.svg";

import "../../dark.css";
import "../../light.css";
import "../../App.css";

function Title() {
  const [query, setQuery] = useState();
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [title, setTitle] = useState("");

  const addTitle = (text) => {
    text.preventDefault();
    // if (query === "" || query === undefined || query === null) {
    //   setError("Debes ingresar un texto");
    // } else {
    setTitle(query);
    setError("");
    setIsEditing(false);
    // }
  };

  console.log(title);

  return (
    <>
      {isEditing ? (
        <>
          <form onSubmit={addTitle} className="title-editor">
            <input
              type="text"
              id="search-bar"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Escriba el titulo"
            />
            <p className="error-form">{error}</p>
          </form>
        </>
      ) : (
        <div className="title-wrapper">
          <h2>{title}</h2>
        </div>
      )}
    </>
  );
}

export default Title;
