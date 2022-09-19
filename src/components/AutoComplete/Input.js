import React, { useState } from "react";
import List from "./List";

import DropDown from "./dropDown.png";
import "./Autocomplete.css";

function Input() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <>
      <div className="input-container">
        <input type="text" value={selected} />
        <img
          src={DropDown}
          alt="drop-down-icon"
          className="image-icon"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? (
        <div>
          <List
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default Input;
