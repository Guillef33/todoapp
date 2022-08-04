import { useState, createContext } from "react";
import "./App.css";
import ToDoContainer from "./components/ToDo/ToDoContainer";
import Home from "./components/Trello/Home";
import Nav from "./components/Trello/nav/Nav";
import Title from "./components/Trello/Title";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [toDos, setToDos] = useState([]);
  const addToDo = () => {
    setToDos((students) => [
      ...toDos,
      <ToDoContainer theme={theme} toggleTheme={toggleTheme} />,
    ]);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Nav />
      {/* Add ToDo */}
      {/* <button onClick={addToDo}>Crear nuevo ToDo</button>
      <div className="container">{toDos.map((uno) => uno)}</div> */}

      {/* Add Title */}
      <Home />

    </ThemeContext.Provider>
  );
}

export default App;

// A mejorar
// Boton Mostrar todos
// El borrado funciona raro, a veces borra y otras no. Es por el index 0 y el modo de incrementar el id.
// Que la palabra desaparezca despues del submit
// Redondez del borde degradado en hover
