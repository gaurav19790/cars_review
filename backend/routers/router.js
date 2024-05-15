import express from "express";
const router=express.Router();

router.get("/home",(req,res)=>{
res.send("hello backend")
})
export {router}