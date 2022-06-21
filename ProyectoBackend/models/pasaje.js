const mongoose = require('mongoose');
const {Schema} = mongoose;

const PasajeSchema = new Schema({
    fechaCompra: {type: String, required: false},
    categoriaPasajero: {type: String, required: false},
   precioPasaje: {type:Number, required:true},
    pasajero: {type: Schema.Types.ObjectId, ref: "Persona" },
});



module.exports = mongoose.models.Pasaje || mongoose.model('Pasaje', PasajeSchema);