import React, { useContext } from "react";

// Protege las rutas a traves de un condicional
import { AuthContext } from "../context/AuthContext";

import Landing from "../pages/Home";

import { useAuth } from "../context/AuthContext";

const PrivateRoute = (props) => {
  const { login } = useAuth();
  // Podemos agregar un componente para el false, toast o alert

  return login ? props.children : <Landing />;
};

export default PrivateRoute;
