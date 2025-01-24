export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { Timeline } from "@/components/post/Timeline";
import { PostItem } from "@/components/post/PostItem";
import { TimelineLoading } from "@/components/post/TimelineLoading";
import { Region } from "@/types/post";
import { createPost, getReplies } from "@/lib/api";
import { supabase } from "@/lib/supabase";
import { ReplyFormSection } from "@/components/post/ReplyFormSection";
import { formatDate } from "@/lib/date";

async function RepliesTimeline({ postId }: { postId: string }) {
  const replies = await getReplies(postId);
  return <Timeline posts={replies} isClickable={false} />;
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { data: post } = await supabase.from("posts").select().eq("id", resolvedParams.id).single();

  if (!post) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">投稿が見つかりません</h1>
      </div>
    );
  }

  const handleSubmit = async (content: string, region: Region) => {
    "use server";

    try {
      await createPost({ content, region, parent_id: resolvedParams.id });
      return { success: true };
    } catch (error) {
      console.error("返信 error:", error);
      return { success: false, error: "返信 error" };
    }
  };

  return (
    <div className="space-y-8">
      <section>
        <PostItem post={post} isClickable={false} formattedDate={formatDate(post.created_at)} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">返信 list</h2>
        <Suspense fallback={<TimelineLoading />}>
          <RepliesTimeline postId={resolvedParams.id} />
        </Suspense>
      </section>

      <ReplyFormSection onSubmit={handleSubmit} parent_id={resolvedParams.id} />
    </div>
  );
}
