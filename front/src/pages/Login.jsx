import axios from "axios";
import { useState } from "react";

function Login() {
  const back = "http://localhost:5050/";

  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);

  // Manda o e-mail e a senha para o back
  function enviar() {
    axios
      .post(back, {
        email,
        senha,
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
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
          type="text"
          placeholder="Senha"
          //Manda para um estado o que está sendo digitado
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <br />
      <div>
        {/*Ativa a função de envio para o back*/}
        <button onClick={enviar}>Login</button>
      </div>
    </div>
  );
}

export default Login;
