import { useState, createContext } from "react";
import "./App.css";
import ReactSwitch from "react-switch";
import ToDoApp from "./components/ToDoApp";
import DarkMode from "./components/darkMode";

import Test from "./components/testResponsive";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // A mejorar
  // Boton Mostrar todos
  // El borrado funciona raro, a veces borra y otras no. Es por el index 0 y el modo de incrementar el id.
  // Que la palabra desaparezca despues del submit
  // Redondez del borde degradado en hover

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="header">
          <h2>TODO</h2>
          <div className="switch">
            {/* <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
            {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> */}
            <DarkMode theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
        <ToDoApp />
        {/* <Test /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
