import React, { useState } from "react";
import "../Login/Login.css";
import Axios from "axios";

function Register() {
  const [username, setUserame] = useState("");

  Axios.defaults.withCredentials = true;

  const crearUser = (e) => {
    e.preventDefault();
    console.log(username);
  };

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

export default Register;
