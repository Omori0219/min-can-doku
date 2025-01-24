"use client";

import { Post } from "@/types/post";
import { PostItem } from "./PostItem";
import { formatDate } from "@/lib/date";

type Props = {
  posts: Post[] | null;
  replyCount?: Record<string, number>;
  isClickable?: boolean;
};

export function Timeline({ posts, replyCount, isClickable = true }: Props) {
  if (!posts || posts.length === 0) {
    return <div className="text-center text-gray-500">投稿がありません</div>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} replyCount={replyCount?.[post.id] ?? 0} formattedDate={formatDate(post.created_at)} isClickable={isClickable} />
      ))}
    </div>
  );
}
