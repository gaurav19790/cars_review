import express from "express";
import {
  postCarDetail,
  getCarDetails,
  postCarDetails,
} from "../controllers/CarDetailController.js";
import { CarBrands } from "../controllers/CarBrands.js";
import { CarBanner } from "../controllers/carBanner.js";
const homeRouter = express.Router();

homeRouter.get("/cars", getCarDetails);
homeRouter.get("/brands", CarBrands);
homeRouter.post("/car", postCarDetail);
homeRouter.post("/", postCarDetails);
homeRouter.get("/banner", CarBanner);
export { homeRouter };
