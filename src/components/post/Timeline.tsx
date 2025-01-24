"use client";

import { Post } from "@/types/post";
import { PostItem } from "./PostItem";

type Props = {
  posts: Post[];
  replyCount?: Record<string, number>;
  onReplyClick?: (post: Post) => void;
};

export const Timeline = ({ posts, replyCount, onReplyClick }: Props) => {
  if (posts.length === 0) {
    return <div className="text-center text-gray-500 py-8">投稿がありません</div>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} replyCount={replyCount?.[post.id]} onReplyClick={onReplyClick ? () => onReplyClick(post) : undefined} />
      ))}
    </div>
  );
};
