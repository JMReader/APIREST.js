const pasaje = require("../models/pasaje");
const Pasaje = require("../models/pasaje")
const Persona = require("../models/persona")

const PasajeControl = {}
PasajeControl.Crear = async (req, res) => {
  console.log(req.body);
  const pasaje = new Pasaje(req.body);
  console.log(pasaje);
  try {
    const persona = await Persona.findOne({ _id: pasaje.pasajero });
    // si la persona no esta en bdd devolvemos error :)
    await pasaje.save();
    res.status(200).json({
      status: 1,
      message: "pasaje creado ",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 0,
      msg: "error al crear el pasaje",
    });
  }
};


PasajeControl.getUno = async (req, res) => {
  try {
      const pasajes = await Pasaje.findById({ _id: req.params.id})
      res.status(200).json(pasajes)
  } catch (error) {
      console.log(error)
      res.status(400).json({
          status: 0,
          msg: "Error obteniendo los pasajes"
      })
  }
};




PasajeControl.getTodos = async (req, res) => {
    try {
        const pasajes = await Pasaje.find().populate("pasajero")
        res.status(200).json(pasajes)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error obteniendo los pasajes"
        })
    }
};
PasajeControl.eliminar = async (req, res) => {
  try {
      const id = req.params.id
      await Pasaje.findByIdAndDelete({_id: req.params.id})
      res.json({
          status: '1',
          message: "Pasaje eliminado correctamente"
      })
  } catch (error) {
      console.log(error)
      res.status(400).json({
          status: '0', 
          msg: "Error al eliminar pasaje"
      })
  }};

PasajeControl.editar = async (req, res) => {
  try {
    const Psj = new Pasaje(req.body);
    await Pasaje.findByIdAndUpdate({_id: Psj._id}, Psj)
    res.json({
      status: '1',
      message: "Pasaje coreectamente editado"
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: '0',
      msg: "Error al editar pasaje"
    })
  }
};

module.exports = PasajeControl;