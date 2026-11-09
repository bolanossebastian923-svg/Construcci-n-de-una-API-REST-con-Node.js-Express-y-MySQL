let conectar = require("../conexion/bdProductos")    
class ProductosController{
   guardar(req,res){
    const{nombre, descripcion, precio, stock}= req.body

    if(!nombre){
        return res.json({"mensaje":"El nombre es obligatorio"})
    }

    if(typeof precio !== "number" || precio <= 0){
        return res.json({"mensaje":"El precio debe ser un número mayor que cero"})
    }

    if(typeof stock !== "number" || stock < 0){
        return res.json({"mensaje":"El stock debe ser un número igual o mayor que cero"})
    }

    conectar.query(
        "INSERT INTO tabla_producto(nombre,descripcion,precio,stock) VALUES(?,?,?,?)",
        [nombre,descripcion,precio,stock],
        (error)=>{
            if(error){
                return res.json({"mensaje":"Error al registrar el producto"})
            }
            else{
                return res.json({"mensaje":"Producto registrado correctamente"})
            }
        }
    )
}

    traer(req,res){
        conectar.query(
            "SELECT*FROM tabla_producto",
            (error,resultado)=>{
                if(error){
                    return res.json({"mensaje":"Error al tarer los productos"})
                }
                else{
                    return res.json(resultado)
                }
            }
        )
    }

    buscar(req,res){
        const {id}=req.params;

        conectar.query(
            "SELECT*FROM tabla_producto WHERE id=?",
            [id],
            (error,resultado)=>{
                if(error){
                    return res.json({"mensaje":"Error al buscar el producto"})
                }
                else{
                    return res.json({resultado})
                }
            }
        )
    }

    actualizar(req,res){
        const {id}=req.params;
        const {nombre, descripcion, precio,stock}=req.body;

        conectar.query(
            "UPDATE tabla_producto SET nombre=?, descripcion=?, precio=?, stock=? WHERE id=?",
            [nombre, descripcion, precio, stock, id],
            (error)=>{
                if(error){
                    return res.json({"mensaje":"Error al actualizar el producto"})
                }
                else{
                    return res.json({"mensaje":"producto actualizado correctamente"})
                }
            }
        )
    }

    eliminar(req,res){
        const{id}= req.params;

        conectar.query(
            "DELETE FROM tabla_producto WHERE id=?",
            [id],
            (error)=>{
                if(error){
                    return res.json({"mensaje":"Error al eliminar el producto"})
                }
                else{
                    return res.json({"mensaje":"Producto eliminado correctamente"})
                }
            }
        )
    }

    agotados(req,res){
        conectar.query(
            "SELECT*FROM tabla_producto WHERE stock=0",
                (error,resultados)=>{
                if(error){
                     return res.json({"mensaje":"Error al tarer los productos agotados"})
                }
                else{
                return res.json(resultados)
                }
            }
        )
    }

    bajoStock(req,res){
        conectar.query(
            "SELECT* FROM tabla_producto WHERE stock < 5",
            (error,resultado)=>{
                if(error){
                    return res.json({"mensaje":"Error al traer los productos con bajo stock"})
                }
                else{
                    return res.json(resultado)
                }
            }
        )
    }


}
module.exports=ProductosController
