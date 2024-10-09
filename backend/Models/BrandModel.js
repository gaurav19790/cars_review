import mongoose from "mongoose";

const BrandSchema = mongoose.Schema({
  brandName: { type: String },
  image: { type: String },
});
const Brands = mongoose.model("Brand", BrandSchema);

export { Brands };
