import express from "express";
import { connectDB } from "./config/db";
import authRouter from "./routes/auth.route";
import itemRouter from "./routes/item.router";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/item", itemRouter);

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
