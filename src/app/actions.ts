"use server";

import { Region } from "@/types/post";

export async function createPostAction(content: string, region: Region) {
  try {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, region }),
      cache: "no-store",
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "投稿 failed");
    }

    return { success: true };
  } catch (error) {
    console.error("投稿エラー:", error);
    return { success: false, error: "投稿 failed" };
  }
}
