import React, { useState } from "react";
import Logo from "../../../assets/img/burguer.svg";
import "./Login.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";

const Login = () => {
  const [login, setLogin] = useState(null);
  const [senha, setSenha] = useState(null);
  const cookies = new Cookies();

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:3333/login", {
        login,
        senha,
      });

      cookies.set('token', res.data.token, { path: '/' });
      //console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="containerLogin">
      <img src={Logo} alt="Logo generica" />
      <div>
        <div className="formLogin">
          <p>Login:</p>
          <input
            placeholder="Digite seu e-mail"
            type="text"
            onChange={(e) => setLogin(e.target.value)}
          />

          <p>Senha: </p>
          <input
            placeholder="Digite sua senha"
            type="text"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="buttonSection">
          <NavLink to="/cadastro">
            <button>Cadastro</button>
          </NavLink>
          <button type="submit" className="btnLogin" onClick={handleClick}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
