import mongoose from "mongoose";
const url ="";
const db = async () => {
  try {
    await mongoose.connect(url);
    // console.log(await Cardetail.find());
    console.log(process.env.URL)
    console.log("conneced");
  } catch (error) {
    console.log("error", error);
  }
};
export  {db};
