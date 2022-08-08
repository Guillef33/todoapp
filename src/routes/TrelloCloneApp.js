import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Header from "../components/Trello/nav/Nav";
import Login from "../components/Login/Login";
import Home from "../components/Trello/Home";
import Main from "../pages/Main";

const TrelloCloneApp = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default TrelloCloneApp;
