"use server";

import { Region } from "@/types/post";

export async function createPostAction(content: string, region: Region) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, region }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "投稿に失敗しました");
    }

    return { success: true };
  } catch (error) {
    console.error("投稿エラー:", error);
    return { success: false, error: "投稿に失敗しました" };
  }
}
