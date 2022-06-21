const Libro = require(('../models/Libro'));
const LibroControl ={};
//obtener todos los libros
LibroControl.getTodosLibros = async (req, res) => {
    var libros = await Libro.find();
    res.json(libros);
}

//devolver destacados :)
LibroControl.filtrarDestacados = async (req, res) => {
    
    try {
        var librosDest = await Libro.find({destacado: {$eq: true}});
        res.json(
     librosDest
            )
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error al filtrar libros destacados'
            })
    }
}





//crear un libro 




LibroControl.createLibro = async (req, res) => {
    var libro = new Libro(req.body);
    try {
    await libro.save();
    res.json({
    'status': '1',
    'msg': 'Libro correctamente guardado :))'})
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando operacion de guardado.'})
    }
    }
    

//editar un libro
LibroControl.editLibro = async (req, res) => {
    const auxL = new Libro(req.body);
    try {
        await Libro.updateOne({_id: req.body._id}, auxL);
        res.json({
            'status': '1',
            'msg': 'Libro actualizado correctamente'
            })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error al actualizar libro'
            })
    }
}


// eliminar un libro 
LibroControl.deleteLibro = async (req, res) => {
    try {
        const id = req.params.id
        await Libro.findByIdAndDelete({_id: req.params.id})
        res.json({
            status: '1',
            message: "Libro eliminado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: '0',
            msg: "Error al eliminar el libro"
        })
    }
}
module.exports = LibroControl;


    