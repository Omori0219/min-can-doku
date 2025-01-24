// 30秒間キャッシュを有効にする
export const revalidate = 30;

import { Suspense } from "react";
import { TimelineLoading } from "./TimelineLoading";
import { Timeline } from "./Timeline";
import { getPosts, getReplyCount } from "@/lib/api";

export async function TimelineSection() {
  // データフェッチにキャッシュを設定
  const posts = await getPosts();
  const replyCount = posts.length > 0 ? await getReplyCount(posts.map((p) => p.id)) : {};

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">new 投稿</h2>
      <Suspense fallback={<TimelineLoading />}>
        <Timeline posts={posts} replyCount={replyCount} />
      </Suspense>
    </section>
  );
}
