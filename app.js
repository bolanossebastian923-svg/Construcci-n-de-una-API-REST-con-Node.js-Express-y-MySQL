const express=require("express")
const cors=require("cors")
const app=express();
const PORT=3000;

const pruebasRoutes=require("./Routes/PruebasRoutes")
const UsuarioRoutes=require("./Routes/UsuarioRoutes")
const ProductosRoutes=require("./Routes/ProductosRoutes")

app.use(express.json());
app.use(cors());

app.use("/apiPrueba",pruebasRoutes)
app.use("/apiUsuario",UsuarioRoutes)
app.use("/apiProductos",ProductosRoutes)

app.listen(PORT, function(){
    console.log('servisor en funcinamiento' + PORT)
})
