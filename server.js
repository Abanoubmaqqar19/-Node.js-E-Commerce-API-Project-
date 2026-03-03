
import app from "./app.js";

import dotenv from "dotenv";

import mongoose  from "mongoose";
dotenv.config();
mongoose.connect(process.env.MongoDB)
  .then(() => {
    console.log("connected to databas")
  })
  .catch((err)=> {
  console.log(`Cannot connect !!!!. ${err.message}`)
  });





console.log(process.env.PORT)
const port = process.env.PORT ||3000;

app.listen(port, () => {
  console.log(`Server runnig at  http://localhost:${port}`);
});