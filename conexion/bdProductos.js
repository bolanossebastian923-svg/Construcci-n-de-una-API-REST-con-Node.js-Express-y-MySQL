const mysql=require("mysql2")

const conectar = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"1060676825sebastian",
    database:"taller_api",
    port:"3306"
})

conectar.connect(function(error){
    if(error){
        console.log("Error al conectar con la bd productos")
    }
    else{
        console.log("Conexion al bd Correctamente productos")
    }
})
module.exports = conectar