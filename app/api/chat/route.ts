// app/api/chat/route.ts
import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  return streamText({
    model: google("gemini-2.0-flash"),
    messages,
  }).toDataStreamResponse();
}
