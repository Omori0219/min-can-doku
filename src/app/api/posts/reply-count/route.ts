import { NextResponse } from "next/server";
import { getReplyCount } from "@/lib/api";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const postIds = searchParams.get("ids")?.split(",") || [];

    if (postIds.length === 0) {
      return NextResponse.json({});
    }

    const replyCount = await getReplyCount(postIds);
    return NextResponse.json(replyCount);
  } catch (error) {
    console.error("返信数取得エラー:", error);
    return NextResponse.json({ error: "返信数の取得に失敗しました" }, { status: 500 });
  }
}
