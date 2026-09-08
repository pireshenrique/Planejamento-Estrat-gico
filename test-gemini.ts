import { GoogleGenAI, Type } from "@google/genai";
import "dotenv/config";

async function run() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: "Tell me about BRICS in 2024",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: { type: Type.OBJECT, properties: { data: { type: Type.STRING } } }
      }
    });
    console.log("Success");
  } catch (e: any) {
    console.log("Error:", e.message);
  }
}
run();
