import express from "express";
import cors from "cors";
import ruta from "./src/modules/proveedor.routes.js";
const App=express();
const ports= 4100;

App.use(express.json());
App.use(cors());

App.use("/Api",ruta);
App.listen(ports,()=>{
    console.log(`Servidor iniciado en el puerto ${ports}`)
})
