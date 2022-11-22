import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const back = "http://localhost:5050/Login";
  const navigate = useNavigate();

  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);

  function handleSetItem(key, data) {
    localStorage.setItem(key, data);
  }
  // Manda o e-mail e a senha para o back
  async function enviar(e) {
    try {
      e.preventDefault();

      const data = await axios.post(back, {
        senha,
        email,
      });
      handleSetItem("token", data.data.token);
      handleSetItem("name", data.data.name);
      handleSetItem("id", data.data.id);
      navigate("/");
    } catch (error) {
      console.log(err);
    }
  }
  // redireciona para a pagina de cadastro.
  function cadastro() {
    navigate("/Registro");
  }

  return (
    <>
      <form>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <p>E-mail</p>
          <input
            type="text"
            placeholder="E-mail"
            //Manda para um state o que esta sendo digitado
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>Senha</p>
          <input
            type="password"
            placeholder="Senha"
            //Manda para um estado o que está sendo digitado
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <br />
        <div>
          {/*Ativa a função de envio para o back*/}
          <button onClick={(e) => enviar(e) }>Login</button>
        </div>
        <br />
      </form>
      <div>
        {/*Redireciona para pagina de registro*/}
        <h2>New account</h2>
        <button onClick={cadastro}>Register</button>
      </div>
    </>
  );
}

export default Login;
