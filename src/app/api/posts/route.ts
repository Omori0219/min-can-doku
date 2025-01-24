import { NextResponse } from "next/server";
import { createPost, getPosts } from "@/lib/api";
import { validateContent } from "@/lib/validation";

const VALID_REGIONS = ["日本", "中国", "他"] as const;

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
    console.error("post 投稿 error:", error);
    return NextResponse.json({ error: "post 投稿 error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("get 投稿 error:", error);
    return NextResponse.json({ error: "get 投稿 error" }, { status: 500 });
  }
}
