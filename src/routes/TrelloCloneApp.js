import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Login from "../components/Login/Login";
import MainBoards from "../components/Trello/MainBoards";
import Landing from "../pages/Home";
import Dashboard from "../pages/Dashboard/Dashboard";

const TrelloCloneApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/tablero" element={<MainBoards />}></Route>

        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
};

export default TrelloCloneApp;
