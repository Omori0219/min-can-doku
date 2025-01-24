"use client";

import { Post } from "@/types/post";
import { PostItem } from "./PostItem";
import { formatDate } from "@/lib/date";

type Props = {
  posts: Post[];
  replyCount?: Record<string, number>;
  onReplyClick?: (post: Post) => void;
  isClickable?: boolean;
};

export function Timeline({ posts, replyCount, onReplyClick, isClickable = true }: Props) {
  if (!posts || posts.length === 0) {
    return <div className="text-center py-8 text-app-text-secondary">投稿がありません</div>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} replyCount={replyCount?.[post.id]} onReplyClick={onReplyClick ? () => onReplyClick(post) : undefined} isClickable={isClickable} formattedDate={formatDate(post.created_at)} />
      ))}
    </div>
  );
}
