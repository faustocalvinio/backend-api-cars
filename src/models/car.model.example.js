const mongoose = require('mongoose');

// Definir el esquema del objeto Car
const carSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  año: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  kilometraje: {
    type: Number,
    required: true
  },
  transmision: {
    type: String,
    enum: ['Manual', 'Automático'],
    required: true
  },
  estado: {
    type: String,
    enum: ['Nuevo', 'Usado'],
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  fechaPublicacion: {
    type: Date,
    default: Date.now
  }
});

// Crear el modelo Car basado en el esquema
const Car = mongoose.model('Car', carSchema);


