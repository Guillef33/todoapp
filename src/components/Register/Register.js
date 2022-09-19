import { useState } from "react";

import "../Login/Login.css";

import { useAuth } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";

export default function Form() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { signUp } = useAuth();

  const [error, setError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    // console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(user.email, user.password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/internal-error") {
        setError("Correo Invalido");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <>
      <div className="loginContainer">
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email "
            placeholder="Ingrese su email"
            onChange={handleChange}
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Ingrese su password"
            onChange={handleChange}
            name="password"
          />
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
}
