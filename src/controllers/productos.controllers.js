const productCtrl = {};

//agregamos la logica para obtener la lista de productos

productCtrl.listarProductos = (req, res)=>{
    //toda la logica que quiero que suceda para obtener la lista
    res.send ('hola desde el backend')
}

export default productCtrl;