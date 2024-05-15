import mongoose from "mongoose";

const url =
  "mongodb+srv://gaurav19790:<password>@carproject.g1nnem3.mongodb.net/cardetail";
const db = async () => {
  try {
    await mongoose.connect(url);
    // console.log(await Cardetail.find());
    console.log("conneced");
  } catch (error) {
    console.log("error", error);
  }
};
export  {db};
