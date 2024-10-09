import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("conneced");
  } catch (error) {
    console.log("error");
  }
};
export { db };
