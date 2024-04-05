const { Schema, model } = require("mongoose");

const CarSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },
   image: {
      type: String,
      required: true,
   },
   year: {
      type: Number,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   category: {
      type: String,
      required: true,
   },
   brand: {
      type: String,
      required: true,
   },
   kilometers: {
      type: Number,
      required: true,
   },
});
module.exports = model("Car", CarSchema);
