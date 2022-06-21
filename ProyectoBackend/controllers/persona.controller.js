const Persona = require("../models/persona");
const PersonaControl = {};

PersonaControl.crear = async (req, res) => {
  const persona = new Persona(req.body);
  try {
    await persona.save();
    res.json({
      status: "1",
      msg: "persona correctamente registrada)",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion de guardado.",
    });
  }
};

//obtener persona por dni
PersonaControl.getPersonaDNI = async (req, res) => {
  try {
    const dni = req.params.dni;
    const persona = await Persona.findOne({ dni: dni });
    res.status(200).json(persona);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 0,
      msg: "Error al buscar a la persona por su dni ",
    });
  }
};

PersonaControl.getPersonaID = async (req, res) => {
  try {
    const id = req.params.id;
    const persona = await Persona.findOne({ _id: id });
    res.status(200).json(persona);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 0,
      msg: "Error al buscar a la persona por su dni ",
    });
  }
};

//toda slas personas
PersonaControl.getPersonas = async (req, res) => {
  try {
    const personas = await Persona.find();
    res.status(200).json(personas);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 0,
      msg: "Error al obtener las personas",
    });
  }
};

module.exports = PersonaControl;
