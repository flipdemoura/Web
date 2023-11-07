import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";

const dados = {
  login: "admin",
  senha: "admin",
};

export default function Login() {
  {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const entrar = () => {
      if (login == "" || senha == "") {
        alert("Preencha todos os campos");
      } else if (login == dados.login && senha == dados.senha) {
        const info = {
          login: login,
          senha: senha,
        };

        localStorage.setItem("info", JSON.stringify(info));
        setLogin("");
        setSenha("");
        navigate("/home/" + login);
      } else {
        alert("Login ou Senha Inválidos!");
      }
    };

    return (
      <>
        <section>
          <h1>Faça seu login</h1>
          <div className="container">
            <p>Usuário</p>
            <input
              type="text"
              placeholder="Digite seu usuário"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="container">
            <p>Senha</p>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button type="button" onClick={entrar}>
            Entrar
          </button>
        </section>
      </>
    );
  }
}
