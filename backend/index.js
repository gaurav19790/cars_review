import express from "express"
const app=express();
import cors from "cors"
app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
try {
    res.status(200).send("hello world");
} catch (error) {
    console.log(error);
}
})

app.post("/",(req,res)=>{
try {
    console.log(req.body);
    res.send("hello")
} catch (error) {
    console.log(error);
}
})
app.listen(4000,()=>{
    console.log("port is listenning to http://www.localhost:4000")
})