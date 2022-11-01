const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postRegistro = async (req, res) => {
  //Envia os dados para o back
  try {
    const body = req.body;
    console.log(body);

    await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};
