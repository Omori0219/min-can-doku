import { NextRequest } from "next/server";
import { getReplies } from "@/lib/api";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const replies = await getReplies(params.id);
    return Response.json(replies);
  } catch (error) {
    console.error("返信の取得エラー:", error);
    return Response.json({ error: "返信の取得に失敗しました" }, { status: 500 });
  }
}
