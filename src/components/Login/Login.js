import React, { useState, useContext } from "react";
import "./Login.css";
import Axios from "axios";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login, setLogin } = useContext(UserContext);
  const [username, setUserame] = useState("");

  Axios.defaults.withCredentials = true;

  let navigate = useNavigate();

  const crearUser = (e) => {
    e.preventDefault();
    setLogin(true);
    navigate("/tablero");

    // console.log(username);
    // Axios.post("http://localhost:5000/users/add")
    //   .then((response) => {
    //     console.log(response);
    //     console.log("Everything is awesome.");
    //     setUserame(username);
    //   })
    //   .catch((error) => {
    //     console.log(username);
    //     console.warn("Not good man :(", error);
    //   });
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
