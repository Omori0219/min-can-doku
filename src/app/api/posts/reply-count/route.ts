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
    console.error("get 返信 count error:", error);
    return NextResponse.json({ error: "get 返信 count error" }, { status: 500 });
  }
}
