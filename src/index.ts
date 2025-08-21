import express from "express";
import mongoose from "mongoose";
import { router } from "./router";
import cors from "cors";



mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    const PORT = 3333;

    app.use(cors());
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
    console.log("Connected to MongoDB");
  })
  .catch((e) => console.log("erro", e));
