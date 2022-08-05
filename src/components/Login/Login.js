import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";

function Login() {
  const [username, setUserame] = useState("");

  Axios.defaults.withCredentials = true;

  const crearUser = (e) => {
    e.preventDefault();
    console.log(username);
    Axios.post("http://localhost:5000/users/add")
      .then((response) => {
        console.log(response);
        console.log("Everything is awesome.");
        setUserame(username);
      })
      .catch((error) => {
        console.log(username);
        console.warn("Not good man :(", error);
      });
  };

  console.log(username);

  return (
    <div className="loginContainer">
      <form>
        <label>Username</label>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={(e) => setUserame(e.target.value)}
          value={username}
        />
        <button onClick={crearUser} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Login;
