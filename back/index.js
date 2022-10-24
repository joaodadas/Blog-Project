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
        id: true,
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
      return res.status(200).json({
        token: "1dagargagry4535grdqtsfd",
        name: data.name,
        id: data.id,
      });
    })
    .catch((err) => {
      return res.sendStatus(500);
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
    .then(() => {
      return res.sendStatus(200);
    })
    .catch(() => {
      console.log("caiu no erro");
      return res.sendStatus(400);
    });
});

//Cria novo post
app.post("/home", (req, res) => {
  const response = req.body;
  console.log(response);

  //Envia o novo post para o bd
  prisma.posts
    .create({ data: { post: response.post, userId: Number(response.id) } })
    .then(() => {
      return res.sendStatus(200);
    })
    .catch(() => {
      return res.sendStatus(400);
    });
});

//Pegando os posts do banco
app.post("/home", (req, res) => {
  prisma.posts
    .findFirst({
      where: { post: response.post },
      select: {
        post: true,
      },
    })
    .then(() => {
      return res.data.post;
    })
    .catch(() => {
      return res.sendStatus(400);
    });
});

app.listen(PORT, () => {
  console.log("Rodando...");
});
