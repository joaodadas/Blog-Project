const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postRegistro = async (req, res) => {
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
};
