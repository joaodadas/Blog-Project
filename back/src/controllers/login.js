const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postLogin = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    //Verifica os dados no back
    const data = await prisma.user.findFirst({
      where: { email: body.email },
      select: {
        email: true,
        password: true,
        name: true,
        id: true,
      },
    });

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
  } catch (error) {
    console.log(error);
  }
};
