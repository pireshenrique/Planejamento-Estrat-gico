import { GoogleGenAI, Type } from "@google/genai";
import "dotenv/config";

async function run() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: "Liste 10 evidências sobre BRICS nos últimos 12 meses. Retorne JSON.",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { title: {type: Type.STRING}, date: {type: Type.STRING}, source: {type: Type.STRING}, url: {type: Type.STRING}, category: {type: Type.STRING} } } }
      }
    });
    console.log(response.text);
  } catch (e: any) {
    console.log("Error API:", e.message);
  }
}
run();
