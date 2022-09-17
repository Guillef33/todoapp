import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Nav from "../components/Trello/nav/Nav";
import Login from "../components/Login/Login";
import Home from "../components/Trello/Home";
import Landing from "../pages/Landing";
import ToDoContainer from "../components/ToDo/ToDoContainer";

const TrelloCloneApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/tablero" element={<Home />}></Route>
        <Route path="/todo" element={<ToDoContainer />}></Route>
      </Routes>
    </>
  );
};

export default TrelloCloneApp;
