import React from "react";

import { Navigate, useNavigate, Route } from "react-router-dom";

function ListOfBoards() {
  const navigate = useNavigate();

  const goToBoards = (e) => {
    e.preventDefault();
    navigate("/tablero");
  };
  return (
    <div>
      <h2>Vistos recientemente</h2>
      <button className="submit-button" onClick={goToBoards}>
        Go To Boards
      </button>
    </div>
  );
}

export default ListOfBoards;
