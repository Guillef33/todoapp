import React, { useState, useEffect } from "react";

import "../../App.js";

function BottomList({ list, setList }) {
  const [mobile, setMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  // console.log(mobile);

  const showAll = () => {
    const newList = list.filter((item) => item.exist === true);
    setList(newList);
  };

  const showCompleted = () => {
    const newList = list.filter((item) => item.isDone === true);
    setList(newList);
  };

  const deleteCompleted = () => {
    const newList = list.filter((item) => item.isDone === false);
    // Aca mas que cambiar a true deberia hacer un togle
    setList(newList);
  };

  const showActive = () => {
    console.log("Active");
  };

  return (
    <>
      {mobile ? (
        <>
          <div className="bottom-list">
            <div className="first-row-mobile">
              <button>
                {list.filter((item) => item.isDone === false).length} items left
              </button>
              <button onClick={deleteCompleted}>Clear Completed</button>
            </div>
          </div>
          <div className="second-row-mobile">
            <button onClick={showAll}>All</button>
            <button onClick={showActive}>Active</button>
            <button onClick={showCompleted}>Completed</button>
          </div>
        </>
      ) : (
        <div className="bottom-list">
          {/* <button>
            {list.filter((item) => item.isDone === false).length} items left
          </button> */}
          <button onClick={showAll}>All</button>
          <button onClick={showActive}>Active</button>
          <button onClick={showCompleted}>Completed</button>
          <button onClick={deleteCompleted}>Clear Completed</button>
        </div>
      )}
    </>
  );
}

export default BottomList;
