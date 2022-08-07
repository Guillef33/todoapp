import React, { createContext, useState } from "react";
import ToDoContainer from "../components/ToDo/ToDoContainer";

export const ThemeContext = createContext(null);

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const [toDos, setToDos] = useState([]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const addToDo = () => {
    setToDos((students) => [
      ...toDos,
      <ToDoContainer theme={theme} toggleTheme={toggleTheme} />,
    ]);
  };

  return (
    <ThemeContext.Provider
      value={{
        toDos,
        setToDos,
        theme,
        setTheme,
        toggleTheme,
        addToDo,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
