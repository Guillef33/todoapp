import React from 'react'

function BottomList({ list, setList }) {
  /////////// Funciona mal /////////////////////////
  const showAll = () => {
    const newList = list.filter((item) => item.exist === true);
    setList(newList);
  };

  const showCompleted = () => {
    if (list.filter((item) => item.isDone === true).length == 0) {
      console.log("sos un lacra que no hace nada");
      return <p>Quiero devolver un empty space cuando no hay </p>;
    }

    const newList = list.filter((item) => item.isDone === true);
    // Aca mas que cambiar a true deberia hacer un togle
    setList(newList);
  };

  const deleteCompleted = () => {
    const newList = list.filter((item) => item.isDone === false);
    // Aca mas que cambiar a true deberia hacer un togle
    setList(newList);
  };

  return (
    <div className="bottom-list">
      <p>{list.filter((item) => item.isDone === false).length} items left</p>
      <button onClick={showAll}>All</button>
      <button onClick={showCompleted}>Completed</button>
      <button onClick={deleteCompleted}>Clear Completed</button>
    </div>
  );
}

export default BottomList