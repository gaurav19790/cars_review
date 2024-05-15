import express from "express";
const app = express();
import cors from "cors";
import { router } from "./routers/router.js";
import { homeRouter } from "./routers/home.js";
import { db } from "./db/db.js";
db();
app.use(cors());
app.use(express.json());


app.use("/", homeRouter);
app.use("/", router);
// app.get("/",(req,res)=>{
// try {
//     res.status(200).send("hello world");
// } catch (error) {
//     console.log(error);
// }
// })

// app.post("/",(req,res)=>{
// try {
//     console.log(req.body);
//     res.send("hello")
// } catch (error) {
//     console.log(error);
// }
// })
app.listen(4000, () => {
  console.log("port is listenning to http://localhost:4000/");
});
