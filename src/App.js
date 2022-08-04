import { useState, createContext } from "react";
import "./App.css";
import ToDoContainer from "./components/ToDo/ToDoContainer";
import Nav from "./components/Trello/Nav";
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
    console.log("dddd", toDos);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Nav />
      <Title />
      <button onClick={addToDo}>Crear nuevo ToDo</button>
      <div className="container">{toDos.map((uno) => uno)}</div>
    </ThemeContext.Provider>
  );
}

export default App;

// A mejorar
// Boton Mostrar todos
// El borrado funciona raro, a veces borra y otras no. Es por el index 0 y el modo de incrementar el id.
// Que la palabra desaparezca despues del submit
// Redondez del borde degradado en hover
