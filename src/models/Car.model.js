const { Schema, model } = require("mongoose");

const CarSchema = new Schema({
   model: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      required: true,
   },
   fuelType: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: false,
      default: 1000,
   },
   isNew: {
      type: Boolean,
      default: false,
   },
   stock: {
      type: Number,
      default: 1,
   },
   image: {
      type: String,
      required: false,
   },
   sales: {
      type: Number,
      default: 0,
   },
   lastUpdate: {
      type: Date,
      default: Date.now,
      required: false,
   },
});
module.exports = model("Car", CarSchema);
