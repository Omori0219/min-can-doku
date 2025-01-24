"use client";

import { Suspense, useState } from "react";
import { TimelineLoading } from "@/components/post/TimelineLoading";
import { FloatingActionButton } from "@/components/post/FloatingActionButton";
import { PostFormModal } from "@/components/post/PostFormModal";
import { createPostAction } from "./actions";
import { PostTimeline } from "@/components/post/PostTimeline";

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
