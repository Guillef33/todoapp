import React, { useState } from "react";

import IconMoon from "../assets/favicon-32x32.png";
import Profile from "../assets/profile-pic.png";

import "./HeaderBoards.css";

import Resultados from "../pages/Resultados/Resultados";

function SearchHeader() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  // No funciona, revisar luego en la consulta a base de datos
  const searchBoard = (e) => {
    e.preventDefault();
    console.log("Aca entro");
    console.log(busqueda);
    setResultados(() => [
      ...resultados,
      <Resultados resultados={resultados} />,
    ]);
  };

  return (
    <form className="search-profile-wrapper" onSubmit={searchBoard}>
      <input
        type="text"
        placeholder="Buscar"
        className="search-input-nav"
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="list-container">{resultados.map((uno) => uno)}</div>
      <div className="search-nav-profile-section">
        <img src={IconMoon} alt="icon-info" />
        <img src={IconMoon} alt="icon-info" />
        <img src={Profile} alt="profile-pic" />
      </div>
    </form>
  );
}

export default SearchHeader;
