"use client";

import { useState, Suspense } from "react";
import { PostForm } from "@/components/post/PostForm";
import { Timeline } from "@/components/post/Timeline";
import { Post, Region } from "@/types/post";
import { useRouter } from "next/navigation";
import { getPosts, getReplyCount } from "@/lib/api";
import { TimelineLoading } from "@/components/post/TimelineLoading";

async function PostTimeline() {
  const posts = await getPosts();
  const replyCount = posts.length > 0 ? await getReplyCount(posts.map((p) => p.id)) : {};

  return <Timeline posts={posts} replyCount={replyCount} />;
}

export default function Home() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (content: string, region: Region) => {
    "use server";

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/posts`, {
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
  };

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">新規投稿</h1>
        <PostForm onSubmit={handleSubmit} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">最新の投稿</h2>
        <Suspense fallback={<TimelineLoading />}>
          <PostTimeline />
        </Suspense>
      </section>
    </div>
  );
}
