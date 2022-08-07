import React, { createContext, useState } from "react";

export const TrelloContext = createContext(null);

const TrelloProvider = (props) => {
  const [boards, setBoards] = useState("");

  function getLocalStorage() {
    const items = JSON.parse(localStorage.getItem("boards"));
    if (items) {
      setBoards(items);
    }
  }

  return (
    <TrelloContext.Provider
      value={{
        boards,
        setBoards,
        getLocalStorage,
      }}
    >
      {props.children}
    </TrelloContext.Provider>
  );
};

export default TrelloProvider;
