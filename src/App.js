import { useState, createContext } from "react";
import "./App.css";
import UserProvider from './context/UserContext'
import AppRouter from "./routes/AppRouter";

// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors });

export const ThemeContext = createContext(null);

function App() {

  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;

