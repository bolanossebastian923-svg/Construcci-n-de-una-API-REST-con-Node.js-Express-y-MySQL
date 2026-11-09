const express= require("express")
const route = express.Router()

const PruebaController=require("../Controllers/PruebaController")
let pruebaController= new PruebaController();

route.get("/bienvenida", pruebaController.bienvenida.bind(pruebaController));
route.get("/verificar",pruebaController.verificar.bind(pruebaController));
route.post("/recibir", pruebaController.recibir.bind(pruebaController));
route.post("/sumar",pruebaController.sumar.bind(pruebaController));

module.exports= route;