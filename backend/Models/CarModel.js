import mongoose from "mongoose";

const CarsSchema = mongoose.Schema({
  name: { type: String, unique: true },
  price: { type: Number },
  model: { type: String },
  mileage: { type: String },
  engine: { type: String },
  Safety: { type: String },
  fuel: { type: String },
  transmission: { type: String },
  seatingCapacity: { type: String },
});
const Cardetail = mongoose.model("cars", CarsSchema);

export { Cardetail };
