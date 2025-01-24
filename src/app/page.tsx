"use client";

import { Suspense, useState } from "react";
import { Timeline } from "@/components/post/Timeline";
import { TimelineLoading } from "@/components/post/TimelineLoading";
import { FloatingActionButton } from "@/components/post/FloatingActionButton";
import { PostFormModal } from "@/components/post/PostFormModal";
import { getPosts, getReplyCount } from "@/lib/api";
import { createPostAction } from "./actions";

async function PostTimeline() {
  const posts = await getPosts();
  const replyCount = posts.length > 0 ? await getReplyCount(posts.map((p) => p.id)) : {};

  return <Timeline posts={posts} replyCount={replyCount} />;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <PostFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={createPostAction} />
    </>
  );
}
