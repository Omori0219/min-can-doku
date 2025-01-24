"use client";

import { Suspense, useState } from "react";
import { Timeline } from "@/components/post/Timeline";
import { Region } from "@/types/post";
import { TimelineLoading } from "@/components/post/TimelineLoading";
import { FloatingActionButton } from "@/components/post/FloatingActionButton";
import { PostFormModal } from "@/components/post/PostFormModal";
import { getPosts, getReplyCount } from "@/lib/api";

async function PostTimeline() {
  const posts = await getPosts();
  const replyCount = posts.length > 0 ? await getReplyCount(posts.map((p) => p.id)) : {};

  return <Timeline posts={posts} replyCount={replyCount} />;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (content: string, region: Region) => {
    "use server";

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
  };

  return (
    <>
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-xl font-bold">最新の投稿</h2>
          <Suspense fallback={<TimelineLoading />}>
            <PostTimeline />
          </Suspense>
        </section>
      </div>

      <FloatingActionButton onClick={() => setIsModalOpen(true)} />
      <PostFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
    </>
  );
}
