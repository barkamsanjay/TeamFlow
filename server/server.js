import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/database.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("🚀 TeamFlow API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});