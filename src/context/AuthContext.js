import React, { createContext, useState, useContext } from "react";
import Home from "../pages/Home";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export function AuthProvider({ children }) {
  // const [navigation, setNavigation] = useState([]);
  const user = {
    login: true,
  };

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);
  };

  // const logout = () => {
  //   setLogin(false);
  //   setNavigation((board) => [...navigation, <Home />]);
  // };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        login,
        user,
        useAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
