import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userRoutes } from "./Routes/index.js";
import cors from 'cors';


const app = express();
dotenv.config();
app.use(cors());

const PORT =5000;
const MONGODB ="mongodb://localhost:27017/eduvis";
//  let http = require("http");
// let server = http.createServer(function (request, response) {
//   response.writeHead(200, { "content-type": "text/plain" });
//   response.end("hellon world ");
// });

//  connect to database
mongoose
  .connect(MONGODB)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log("Mongodb error :", err));
// use the API
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});
app.use("/api", userRoutes);
// start express server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
// let http = require("http");
// let server = http.createServer(function (request, response) {
//   response.writeHead(200, { "content-type": "text/plain" });
//   response.end("hellon world ");
// });
// server.listen(7000);
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

