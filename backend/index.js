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

app.post("/api/ask", async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = await req.body.prompt;

    console.log(await req);

    const result = await model.generateContent(prompt);
    res.send(result.response);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api", async (req, res) => {
  res.send("hello from backend!");
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
