import { Cardetail } from "../Models/CarModel.js"


const getCarDetails=(async(req,res)=>{
  try {
    const cardetails=await Cardetail.find();
//  cardetails.save();
res.status(200).json(cardetails);
  } catch (error) {
    res.status(400).json({"message":"error"});
  }
  
})
const getCarDetail=(async(req,res)=>{
  const cardetails=await  Cardetail.find({name:"hello"});
res.json(cardetails);
})

const postCarDetails=(async (req,res)=>{
try {
 const data= req.body;
 Cardetail.create(data);
 const a=await Cardetail.find({name:"swift"})
 res.status(201).json(a);
} catch (error) {
  
}
})
export {getCarDetails,getCarDetail,postCarDetails};