import * as dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import mongoose from "mongoose";
import authRouter from "./routes/AuthRouter";
const app: Application = express();

import morgan from "morgan";
app.use(morgan("dev"));

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const port = process.env.PORT || 3300;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/users", authRouter);

(async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL || "mongodb://localhost:3000/Task managament"
    );
    app.listen(port, () => {
      console.log("this is port "  + port);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
