import Producto from "../models/producto";

const productCtrl = {};

//agregamos la logica para obtener la lista de productos

productCtrl.listarProductos = (req, res) => {
  //toda la logica que quiero que suceda para obtener la lista
  res.send("hola desde el backend");
};

productCtrl.crearProducto = async (req, res) => {
  try {
    console.log(req.body);
    //validar
    //crear producto en la bd
    const productoNuevo = new Producto({
      productName: req.body.productName,
      price: req.body.price,
      urlImg: req.body.urlImg,
      category: req.body.category,
    });
    // guardar en la base de datos
    await productoNuevo.save();
    //enviar respuesta
    res.status(201).json({
      mensaje: "Product create",
    });
  } catch (error) {
    console.log(error);
    //enviar codigo de error
    res.status(404).json({
      mensaje: "error al intentar agregar un producto",
    });
  }
};

export default productCtrl;
