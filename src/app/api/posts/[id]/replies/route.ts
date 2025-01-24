import { NextResponse } from "next/server";
import { getReplies } from "@/lib/api";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const replies = await getReplies(params.id);
    return NextResponse.json(replies);
  } catch (error) {
    console.error("返信取得エラー:", error);
    return NextResponse.json({ error: "返信の取得に失敗しました" }, { status: 500 });
  }
}
