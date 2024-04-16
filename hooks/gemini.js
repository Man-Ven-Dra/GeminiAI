import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY } from "../../gemini_api";

const geminiLogic = (prompts) => {
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = prompts;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
    }
    return run();

}

export default geminiLogic;