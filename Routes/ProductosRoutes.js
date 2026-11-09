const express= require("express")
const rutaProductos=express.Router()

const ProductosController=require("../Controllers/ProductosController")
let productosController=new ProductosController();

rutaProductos.post("/productos",productosController.guardar.bind(productosController))
rutaProductos.get("/productos",productosController.traer.bind(productosController))
rutaProductos.get("/productos/agotados",productosController.agotados.bind(productosController))
rutaProductos.get("/productos/bajo-stock", productosController.bajoStock.bind(productosController))
rutaProductos.get("/productos/:id",productosController.buscar.bind(productosController))
rutaProductos.put("/productos/:id",productosController.actualizar.bind(productosController))
rutaProductos.delete("/productos/:id", productosController.eliminar.bind(productosController))



module.exports=rutaProductos