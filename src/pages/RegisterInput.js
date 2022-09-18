import React, { useState } from "react";

import "./RegisterInput.css";

import IconMoon from "../assets/favicon-32x32.png";

import { Navigate, useNavigate, Route } from "react-router-dom";
import UserFormPage from "./UserFormPage";
import Register from "../components/Register/Register";

function RegisterInput() {
  const [watch, setWatch] = useState(false);
  const [registerUser, setRegisterUser] = useState();

  let navigate = useNavigate();

  const checkRegisterUser = (e) => {
    e.preventDefault();
    setRegisterUser(registerUser);

    {
      registerUser && (
        <Route
          path="auth/register"
          component={() => <UserFormPage registerUser={registerUser} />}
        />
      );
    }

    navigate("/auth/register");
  };

  const watchVideo = (e) => {
    console.log("estoy");
    e.preventDefault();
    setWatch(true);
  };

  return (
    <>
      <form className="input-register-wrapper">
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setRegisterUser(e.target.value)}
          value={registerUser}
        />
        <button className="submit-button" onClick={checkRegisterUser}>
          Sign up - it's free
        </button>
      </form>
      <div className="watch-video-link">
        <button onClick={watchVideo}>Watch Video </button>
        <img src={IconMoon} alt="icon-moon" />
      </div>
    </>
  );
}

export default RegisterInput;
