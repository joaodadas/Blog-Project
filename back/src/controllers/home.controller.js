const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postHome = (req, res) => {
  const body = req.body;
  const hora = new Date();
  console.log(body);

  console.log(hora);
  //Envia o novo post para o bd
  prisma.posts
    .create({ data: { post: body.post, userId: Number(body.id) } })
    .then(() => {
      return res.sendStatus(200);
    })
    .catch(() => {
      return res.sendStatus(400);
    });
};

exports.getHome = (req, res) => {
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
};
