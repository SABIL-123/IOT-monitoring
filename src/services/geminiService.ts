import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getSmartOlahan(ingredients: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Berikan 3 resep inovatif berbasis sorgum menggunakan bahan tambahan: ${ingredients}. Berikan dalam format JSON dengan struktur: { recipes: [{ name, ingredients: [], steps: [] }] }`,
    config: {
      responseMimeType: "application/json",
    }
  });
  return JSON.parse(response.text || "{}");
}

export async function getEduChat(message: string, context: string = "") {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Anda adalah asisten ahli SorgumEdu. Jawab pertanyaan berikut tentang sorgum: ${message}. Konteks: ${context}`,
  });
  return response.text;
}
