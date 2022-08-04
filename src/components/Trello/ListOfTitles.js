import React, { useState } from "react";

import Title from "./Title";

function ListOfTitles() {
  const [listOfTitles, setListOfTitles] = useState([]);

  const showSearch = () => {
    setListOfTitles((titles) => [...listOfTitles, <Title />]);
  };
  return (
    <div className="header">
      <div className="title-container">
        <div className="title-row">{listOfTitles.map((uno) => uno)}</div>
        <button onClick={showSearch}>+ nueva tarea</button>
      </div>
    </div>
  );
}

export default ListOfTitles;
