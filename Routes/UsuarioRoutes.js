const express= require("express")
const rutaUsuario = express.Router()

const UsuarioController=require("../Controllers/UsuariosController");
let usuarioController=new UsuarioController();

rutaUsuario.post("/usuarios",usuarioController.guardar.bind(usuarioController))
rutaUsuario.get("/usuarios",usuarioController.traer.bind(usuarioController))
rutaUsuario.get("/usuarios/:id",usuarioController.buscar.bind(usuarioController))
rutaUsuario.put("/usuarios/:id",usuarioController.actualizar.bind(usuarioController))
rutaUsuario.delete("/usuarios/:id",usuarioController.eliminar.bind(usuarioController))


module.exports=rutaUsuario