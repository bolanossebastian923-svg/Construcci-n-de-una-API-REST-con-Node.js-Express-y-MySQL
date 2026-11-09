let conectar=require("../conexion/bdUsuarios")

class UsuarioController{
    guardar(req,res){
        const {nombre, apellido, direccion, telefono} = req.body;

        conectar.query(
            "INSERT INTO tabla_usuarios(nombre,apellido,direccion,telefono) VALUES (?,?,?,?)",
            [nombre,apellido,direccion,telefono],
            (error)=>{
                if(error){
                    return res.json({"mensaje":"error al registrar el usuario"});
                }
                else{
                    return res.json({"mensaje":"usuario registrado correctamente"});
                }
            }
        );
    }

    traer(req,res){
        conectar.query("SELECT  *FROM tabla_usuarios",(error,resultado)=>{
            if(error){
                return res-json({"mensaje":"error al traer los usuarios"});
            }
            else{
                return res.json({resultado})
            }
        })
    }

    buscar(req,res){
        const{id}=req.params;

        conectar.query(
            "SELECT * FROM tabla_usuarios WHERE id=?",
            [id],
            (error,resultado)=>{
                if(error){
                    return res.json({"mensaje":"Error al buscar el id del usuario"})
                }
                else{
                    return res.json(resultado);
                }
            }
        )
    }

    actualizar(req,res){
        const {id}=req.params;
        const {nombre, apellido, direccion, telefono}= req.body;

        conectar.query("UPDATE tabla_usuarios SET nombre=?, apellido=?, direccion=?, telefono=? WHERE id=?",
            [nombre, apellido, direccion, telefono, id],
            (error)=>{
                if(error){
                    return res.json({"mensaje":"Error al actualizar el usuario"});
                }
                else{
                    return res.json({"mensaje":"Usuario actualizado correctamente"})
                }
            }
        )
    }

    eliminar(req,res){
        const{id}=req.params;

        conectar.query(
            "DELETE FROM tabla_usuarios WHERE id=?",
        [id],
    (error)=>{
        if(error){
            return res.json({"mensaje":"Error al eliminar el usuario"})
        }
        else{
            return res.json({"mensaje":"Usuario eliminado correctamente"})
        }
    })
    }
}
module.exports=UsuarioController