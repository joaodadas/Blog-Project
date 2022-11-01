const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getProfile = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.posts.findMany({
      where: { userId: Number(id) },
      select: { post: true, id: true },
    });
    return res.send(data);
  } catch (error) {
    console.log(e);
    return res.sendStatus(400);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const data = await prisma.posts.delete({
      where: { id: Number(id) },
    });
    console.log(data);
    return res.send(data);
  } catch (error) {
    console.log(error);
  }
};
