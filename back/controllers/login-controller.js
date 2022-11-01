const cors = require("cors");
const express = require("express");
const { PrismaClient } = require("@prisma/client");


const app = express();
const prisma = new PrismaClient();


app.use(cors({ origin: true }));
app.use(express.json());

exports.postLogin = (req, res) => {
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
};
