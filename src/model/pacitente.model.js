const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome:String,
    nascimento:Date,
    cpf:Number,
    sexo:String,
    endereco: String,
    status:String
},{
    timestamps:true
})

DataSchema.pre('save', function(next){
    next()
});

const Paciente = mongoose.model('paciente', DataSchema);
module.exports = Paciente;