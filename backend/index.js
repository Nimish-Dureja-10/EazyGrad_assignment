import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`MongoDB connection successfull`)
}

app.use("/api/v1",contactRoutes);


app.listen(5000,()=> {
    console.log(`Server is running`);
});