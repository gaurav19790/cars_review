import express from "express";
import { getCarDetail, getCarDetails, postCarDetails } from "../controllers/CarDetailController.js";
const homeRouter=express.Router();

homeRouter.get("/",getCarDetails)
homeRouter.get("/car",getCarDetail)
homeRouter.post("/",postCarDetails)
export{homeRouter}