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
      Act as a companion storyteller who bridges the gap between fragmented thoughts and a vivid dream experience.
      
      The user has provided these dream fragments: "${fragments}"
      The dream's atmosphere/mode is: ${mode}

      Task:
      1. Validation: Check if the fragments are meaningful. If the fragments are nonsense, purely profane, too short (less than 3 non-filler words), or random characters, do NOT generate a story. Instead, provide a helpful "errorMessage".
      
      2. Story Generation: 
         - Preservation: Use the user's fragments as the factual foundation. Do not heavily rewrite or over-embellish these specific details; keep them grounded as the starting point.
         - Expansion (The "Next Step"): Spend the majority of the paragraph describing the immediate progression of the dream. Based on the "${mode}", narrate what happens after these fragments occur. 
         - Length: Write exactly 1 paragraph (100-150 words).

      3. Tone: Use everyday, relatable language. Avoid "AI-speak" or overly flowery, ethereal prose. Speak like a friend describing a dream they just woke up from.

      4. Requirements:
         - The story must start with the fragments and then pivot into a new, unfolding sequence of events.
         - The "what happened next" must be heavily influenced by the ${mode}.
         - Output MUST be in valid JSON format.

      JSON Output Structure:
      {
         "title": "A relatable, simple title",
         "story": "The continuation of the dream...",
         "atmosphere": "1-word mood",
         "errorMessage": "null or a friendly explanation of why the fragments couldn't be used"
      }
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
