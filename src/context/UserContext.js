import React, { createContext, useState, useEffect } from "react";

import Landing from "../pages/Landing";
export const UserContext = createContext(null);

const UserProvider = (props) => {
  const [login, setLogin] = useState(true);
  const [navigation, setNavigation] = useState([]);

  const logout = () => {
    setLogin(false);
    setNavigation((board) => [...navigation, <Landing />]);
  };

  console.log(login);

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        setLogin,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
