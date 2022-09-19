import React from "react";
import AuthRouter from "./AuthRouter";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrelloCloneApp from "./TrelloCloneApp";
import PrivateRoute from "./PrivateRoute";

// Rutas Padres y Rutas Hijas

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="auth/*" element={<AuthRouter />} />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <TrelloCloneApp />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
