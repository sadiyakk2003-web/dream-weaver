import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
    try {
        const { fragments, mode } = await req.json();

        if (!fragments) {
            return NextResponse.json({ error: "No fragments provided" }, { status: 400 });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        const prompt = `
      Act as the "Dream Weaver," an ethereal storytelling engine.
      
      User dream fragments: "${fragments}"
      Selected Mode: ${mode}

      Requirements:
      1. Provide a 1-paragraph story (approx 100-150 words) that "completes" the dream based on the selected mode (${mode}).
      2. Tone: Magical, ethereal, and intuitive.
      3. Output MUST be in valid JSON format with the following keys:
         "title": A short, poetic title for the dream.
         "story": The generated story paragraph.
         "atmosphere": A 1-word description of the mood.

      JSON Output:
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Extract JSON from the response (in case Gemini wraps it in code blocks)
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        const jsonResponse = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(text);

        return NextResponse.json(jsonResponse);
    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json({ error: "Failed to weave the dream" }, { status: 500 });
    }
}
