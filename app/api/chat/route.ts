import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
);

const SYSTEM_PROMPT = `あなたは合同会社出野（ideno LLC）のAIアシスタントです。
以下のサービスについて丁寧にご案内します：

【SNS運用代行】
- STANDARD：月額100,000円〜（Instagram/X/TikTokいずれか1媒体）
- PREMIUM：月額125,000円〜（複数媒体対応）
- 投稿企画・撮影・編集・投稿・分析まで一括対応

【ホームページ制作】
- LIGHT：200,000円〜（シンプルな企業サイト）
- STANDARD：350,000円〜（コンテンツ充実型）
- PREMIUM：500,000円〜（フルカスタム）

【社長の一日】
- 経営者密着ドキュメンタリー動画制作
- YouTubeチャンネル：@one-shacho

お問い合わせはサイト下部のフォームからどうぞ。
回答は簡潔に3〜5文でお願いします。サービス外の質問は「お問い合わせフォームよりご連絡ください」と案内してください。`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "はい、合同会社出野のAIアシスタントとしてご案内します。何でもお気軽にご相談ください！" }],
        },
        ...messages.slice(0, -1).map((m: { role: string; content: string }) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        })),
      ],
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.content);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json({ reply: "申し訳ございません。しばらく後でもう一度お試しください。" }, { status: 500 });
  }
}
