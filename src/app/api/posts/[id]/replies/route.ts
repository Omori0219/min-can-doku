import { NextRequest, NextResponse } from "next/server";
import { getReplies } from "@/lib/api";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const replies = await getReplies(id);
    return NextResponse.json(replies);
  } catch (error) {
    console.error("get 返信 error:", error);
    return NextResponse.json({ error: "get 返信 error" }, { status: 500 });
  }
}
