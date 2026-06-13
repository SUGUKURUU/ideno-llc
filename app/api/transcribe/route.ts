import { NextRequest, NextResponse } from "next/server";

const ASSEMBLYAI_API_KEY = process.env.ASSEMBLYAI_API_KEY || "";
const BASE_URL = "https://api.assemblyai.com/v2";

// YouTube動画URLから音声を文字起こしする
export async function POST(req: NextRequest) {
  try {
    const { audioUrl } = await req.json();
    if (!audioUrl) {
      return NextResponse.json({ error: "audioUrl is required" }, { status: 400 });
    }

    // 文字起こしジョブ作成
    const submitRes = await fetch(`${BASE_URL}/transcript`, {
      method: "POST",
      headers: {
        authorization: ASSEMBLYAI_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        audio_url: audioUrl,
        language_code: "ja",
        punctuate: true,
        format_text: true,
      }),
    });

    const submitData = await submitRes.json();
    return NextResponse.json({ id: submitData.id });
  } catch (error) {
    console.error("AssemblyAI submit error:", error);
    return NextResponse.json({ error: "Failed to submit transcription" }, { status: 500 });
  }
}

// ジョブの結果を取得する
export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  try {
    const res = await fetch(`${BASE_URL}/transcript/${id}`, {
      headers: { authorization: ASSEMBLYAI_API_KEY },
    });
    const data = await res.json();
    return NextResponse.json({
      status: data.status,
      text: data.text,
      words: data.words,
    });
  } catch (error) {
    console.error("AssemblyAI poll error:", error);
    return NextResponse.json({ error: "Failed to fetch transcription" }, { status: 500 });
  }
}
