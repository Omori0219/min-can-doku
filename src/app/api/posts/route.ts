import { NextResponse } from "next/server";
import { createPost, getPosts } from "@/lib/api";
import { validateContent } from "@/lib/validation";
import { Region } from "@/types/post";

const VALID_REGIONS = ["日本", "中国", "台湾", "香港", "他"] as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { content, region, parent_id } = body;

    // バリデーション
    const error = validateContent(content);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    if (!VALID_REGIONS.includes(region)) {
      return NextResponse.json({ error: "無効な地域が指定されています" }, { status: 400 });
    }

    // 投稿の作成
    const post = await createPost({ content, region, parent_id });
    return NextResponse.json(post);
  } catch (error) {
    console.error("投稿作成エラー:", error);
    return NextResponse.json({ error: "投稿の作成に失敗しました" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Number(searchParams.get("limit")) || 20;

    const posts = await getPosts(limit);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("投稿取得エラー:", error);
    return NextResponse.json({ error: "投稿の取得に失敗しました" }, { status: 500 });
  }
}
