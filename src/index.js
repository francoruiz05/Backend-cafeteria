import express from "express";
import { append } from "express/lib/response";
import morgan from "morgan";
import cors from "cors";
import path from "path";

// creo una instancia de express
const app = express();

//crear un puerto 
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), ()=>{
   console.log("estoy en el puerto "+ app.get("port")) 
})

//middleware p config extras
app.use(morgan('dev')); // info extra en la terminal
app.use(cors()); //acepta peticiones externas

//interpretar en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//aqui mostramos por def el index.html se ejecute la consulta

app.use(express.static(path.join(__dirname, '../public')))

// ruta de prueba
app.get('/products', (req, res)=>{
   //lo que quiero que pase cuando se ejecute esta consulta
   res.send ('hola desde el backend')
})
app.get('/', (req, res)=>{
   //lo que quiero que pase cuando se ejecute esta consulta
   res.send ('hola ramon')
})


