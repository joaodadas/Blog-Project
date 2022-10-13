import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const back = "http://localhost:5050/registro";

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  function resgistrar() {
    axios
      .post(back, {
        name,
        email,
        password,
      })
      .then()
      .catch();
  }

  return (
    <div>
      <div>
        <h1>Cadastro</h1>
      </div>
      <div>
        <p>Nome</p>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <p>E-mail</p>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <p>Senha</p>
        <input
          type="text"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button onClick={resgistrar}>Cadastar!</button>
      </div>
    </div>
  );
}

export default Registro;
