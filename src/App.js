import { useState, createContext } from "react";
import "./App.css";
import UserProvider from './context/UserContext'
import AppRouter from "./routes/AppRouter";


export const ThemeContext = createContext(null);

function App() {

  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;

