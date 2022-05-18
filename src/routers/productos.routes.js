// la mision de este archivo es mantener las rutas
import { Router } from "express";
import productCtrl from "../controllers/productos.controllers";

// instancio al router
const router = Router();

// crear la ruta
router
  .route("/products")
  .get(productCtrl.listarProductos)
  .post(productCtrl.crearProducto);

export default router;
