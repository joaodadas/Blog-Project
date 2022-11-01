const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const LoginController = require("./controllers/login.controller");
const RegistroController = require("./controllers/registro.controller");
const HomeController = require("./controllers/home.controller");
const ProfileController = require("./controllers/profile.controller")
const { Router } = require("express");

const routes = new Router();

routes.post("/Login", LoginController.postLogin);

//Cadastra novos usuarios
routes.post("/registro", RegistroController.postRegistro);

//Cria novo post
routes.post("/", HomeController.postHome);

//Pegando os posts para a home
routes.get("/", HomeController.getHome);

//Pegando os posts para o perfil
routes.get("/profile/:id", ProfileController.getProfile);

//Deleta posts do perfil

routes.delete("/delete/:id", ProfileController.deletePost);

module.exports = routes;
