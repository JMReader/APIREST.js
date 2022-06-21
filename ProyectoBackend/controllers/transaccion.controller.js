const Transaccion = require(('../models/transaccion'));
const TransaccionControl ={};
//crear transaccion
TransaccionControl.crearTransaccion = async (req, res) => {
    var crear = new Transaccion(req.body)
    try {
        await crear.save()
        res.status(200).json({
            status: 1,
            message: "Transaccion creada"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "No fue posible crear la transaccion"
        })
    }
}

TransaccionControl.getTodas = async (req, res) => {
    try {
        const transacciones = await Transaccion.find()
        res.status(200).json(transacciones)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al obtener las transacciones"
        })
    }
}


TransaccionControl.filtrarTransaccionesMail = async (req, res) => {
    try {
        const email = req.query.email
        var transacciones = await Transaccion.find()
        if(email) transacciones = await Transaccion.find({emilCliente: email})
        res.status(200).json(transacciones)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error obteniendo las transacciones de este cliente"
        })
    }
}


TransaccionControl.filtrarTransaccionesDivisas = async (req, res) => {
    try {
        const origen = req.query.origen, destino = req.query.destino
        var transacciones = await Transaccion.find()
        if(origen && destino) transacciones = await Transaccion.find({
            $and: [
                {monedaOrigen: origen}, 
                {monedaDestino: destino}
            ]
        })
        res.status(200).json(transacciones)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error obteniendo las transacciones de las divisas"
        })
    }
}








//exportamos el modulo
module.exports = TransaccionControl;