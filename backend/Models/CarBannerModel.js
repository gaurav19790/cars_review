import mongoose from "mongoose";

const CarBannerSchema = mongoose.Schema({
  title: { type: String },
  header: { type: String },
  descreption: { type: String },
  image: { type: String },
});

const CarBanners = mongoose.model("CarBanner", CarBannerSchema);

export { CarBanners };
