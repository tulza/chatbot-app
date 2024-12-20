// import OpenAI from "openai";
import express from "express";
import cors from "cors";
import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

// setup
const app = express();
app.use(cors());
app.use(express.json());
// gemini ai
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get("/api", async (req, res) => {
  console.log(req.body);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "in less than 50 words, tell me about node.js";

  const result = await model.generateContent(prompt);
  res.send(result.response.text());
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
