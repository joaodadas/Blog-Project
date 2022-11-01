const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getProfile = (req, res) => {
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
};

exports.deletePost = (req, res) => {
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
};
