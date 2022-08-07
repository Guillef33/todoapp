import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

const UserProvider = (props) => {
  const [login, setLogin] = useState(false);

  const logout = () => {
    setLogin(false);
  };

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
