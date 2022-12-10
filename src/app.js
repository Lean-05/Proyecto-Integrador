const path = require("path");
const express = require("express");
const app = express();

/*Configuracion Express*/
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname,"views"));
app.use(express.static(path.resolve(__dirname,"../public")))

/*Sistema de Rutas*/
const products = require("./routes/products")
//Ruta de productos
app.use("/productos", products);

/*404 NotFound*/
app.use((req,res,next)=>{
    res.render("404-page")
})

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})