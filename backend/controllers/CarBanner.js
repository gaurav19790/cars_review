import { CarBanners } from "../Models/CarBannerModel.js";

const CarBanner = async (req, res) => {
  try {
    res.status(200).json(await CarBanners.find());
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

export { CarBanner };
