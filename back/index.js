const cors = require("cors");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const PORT = 5050;
const app = express();
const prisma = new PrismaClient();

app.use(cors({ origin: true }));
app.use(express.json());

//Recebe e trata os dados da tela de login
app.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  //Rerifica os dados no back
  prisma.user
    .findFirst({
      where: { email: body.email },
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
      if (data.password !== body.senha) {
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
  const body = req.body;
  console.log(body);

  //Envia os dados para o back
  await prisma.user
    .create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    })
    .then(() => {
      return res.sendStatus(200);
    })
    .catch(() => {
      return res.sendStatus(400);
    });
});

//Cria novo post
app.post("/home", (req, res) => {
  const body = req.body;
  const hora = new Date;
  console.log(body);
  
  console.log(hora)
  //Envia o novo post para o bd
  prisma.posts
    .create({ data: { post: body.post, userId: Number(body.id) } })
    .then(() => {
      return res.sendStatus(200);
    })
    .catch(() => {
      return res.sendStatus(400);
    });
});

//Pegando os posts para a home
app.get("/home", (req, res) => {
  prisma.posts
    .findMany({
      select: { post: true },
    })
    .then((data) => {
      console.log(data);
      return res.send(data);
    })
    .catch((e) => {
      console.log(e);
      return res.sendStatus(400);
    });
});

//Pegando os posts para o perfil
app.get("/profile/:id", (req, res) => {
  const { id } = req.params;

  prisma.posts
    .findMany({
      where: { userId: Number(id) },
      select: { post: true, id: true },
    })
    .then((data) => {
      return res.send(data);
    })
    .catch((e) => {
      console.log(e);
      return res.sendStatus(400);
    });
});

//Deleta posts do perfil

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  prisma.posts
    .delete({
      where: { id: Number(id) },
    })
    .then((data) => {
      console.log(data);
      return res.send(data);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.listen(PORT, () => {
  console.log("Rodando...");
});
