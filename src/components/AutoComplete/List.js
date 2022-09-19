import React, { useState } from "react";

import Data from "./data.json";

function List({ isOpen, setIsOpen, selected, setSelected }) {

  return (
      <ul>
        {Data.map((item) => {
          return (
            <li key={item.id} onClick={(e) => setSelected(item.name)}>
              {item.name}
            </li>
          );
        })}
      </ul>
  );
}

export default List;
