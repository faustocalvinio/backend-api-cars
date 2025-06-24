import { model, Schema } from "mongoose";

const CarSchema = new Schema({
   model: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      required: true,
   },
   brand: {
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
   stock: {
      type: Number,
      default: 1,
   },
   image: {
      type: String,
      required: false,
   },
   portraitImage: {
      type: String,
      required: false,
   },
   sales: {
      type: Number,
      default: 0,
   },
   lastUpdate: {
      type: Number,
      default: Date.now,
      required: false,
   },
});
export const Car = model("Car", CarSchema);
