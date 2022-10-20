const cors = require("cors");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
  
const PORT = 5050;
const app = express();
const prisma = new PrismaClient();
let token = "";

app.use(cors({ origin: true }));
app.use(express.json());

//Recebe e trata os dados da tela de login
app.post("/", (req, res) => {
  const response = req.body;

  //Rerifica os dados no back
  prisma.user
    .findFirst({
      where: { email: response.email },
      select: {
        email: true,
        password: true,
        name: true,
      },
    })
    .then((data) => {
      //Verifica email
      if (!data) {
        return res.status(400).json({ message: "Usuario ou senha incorreto" });
      }

      //Veriricar senha
      if (data.password !== response.senha) {
        return res.status(400).json({ message: "Usuario ou senha incorreto" });
      }

      //Retorna susseso e token
      return res
        .status(200)
        .json({
          token: "1dagargagry4535grdqtsfd",
          name: data.name
        });
    })
    .catch((err) => {
      return res.sendStatus(500)
    });
});

//Cadastra novos usuarios
app.post("/registro", async (req, res) => {
  const response = req.body;

  console.log(response);

  //Envia os dados para o back
  await prisma.user
    .create({
      data: {
        name: response.name,
        email: response.email,
        password: response.password,
      },
    })
    .then((data) => {
      return res.sendStatus(200)
    })
    .catch((error) => {
      console.log("caiu no erro")
      return res.sendStatus(400)

    });
});

app.post("/home", (req, res) =>{
  const response = req.body;

  console.log(response)
})

app.listen(PORT, () => {
  console.log("Rodando...");
});
