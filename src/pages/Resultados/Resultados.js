import React from "react";

function Resultados( { resultados }) {

 console.log('Estoy aca en resultados')
  return <div className="list-container">{resultados.map((uno) => uno)}</div>;
}

export default Resultados;
