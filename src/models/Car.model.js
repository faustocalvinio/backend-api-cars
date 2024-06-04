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
   },
   isNew: {
      type: Boolean,
      default: false,
   },
});
module.exports = model("Car", CarSchema);
