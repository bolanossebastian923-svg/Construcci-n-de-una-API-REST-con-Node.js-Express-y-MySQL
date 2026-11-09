class PruebaController{
    bienvenida(req,res){
        res.json({"mensaje":"Bienvenido a mi api Rest"})
    }

    verificar(req,res){
        res.json({"mensaje":"servidor funcionando Correctamente",
            "estado":true
        });
    }

    recibir(req,res){
        const nombre= req.body.nombre;
        const edad=req.body.edad

        res.json({"mensaje":"Datos recibidos Correctamente",
            "nombre":nombre,
            "edad":edad
        });
    }

    sumar(req,res){
        const{numero1,numero2}=req.body

        const resultado=numero1 + numero2
        res.json({"resultado":resultado});
    }
}

module.exports= PruebaController



   