import { Cardetail } from "../Models/CarModel.js";

const getCarDetails = async (req, res) => {
  try {
    const cardetails = await Cardetail.find();
    res.status(200).json(cardetails);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};
const postCarDetail = async (req, res) => {
  const body = req.body;
  const cardetails = await Cardetail.find(body);
  res.json(cardetails);
};

const postCarDetails = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.body, req.query, req.params);
    // Cardetail.create(data);
    const a = await Cardetail.find({ name: "swift" });
    res.status(201).json(a);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
export { getCarDetails, postCarDetail, postCarDetails };
