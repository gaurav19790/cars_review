import express from "express";
const app = express();
import cors from "cors";
import { db } from "./db/db.js";
import { configDotenv } from "dotenv";
import { mainRouter } from "./routers/index.js";
configDotenv();
db();
app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRouter);

app.listen(4000, () => {
  console.log("port is listenning to http://localhost:4000/api/v1");
});
