const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postHome = async (req, res) => {
  try {
    const body = req.body;
    const hora = new Date();
    console.log(body);

    console.log(hora);
    //Envia o novo post para o bd
    await prisma.posts.create({ data: { post: body.post, userId: Number(body.id) } });

    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

exports.getHome = async (req, res) => {
  try {
    const data = await prisma.posts.findMany({
      select: { post: true },
    });
    console.log(data);
    return res.send(data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
