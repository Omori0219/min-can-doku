"use client";

import { Post } from "@/types/post";
import Link from "next/link";
import { PostItemBase } from "./PostItemBase";

type Props = {
  post: Post;
  replyCount?: number;
  onReplyClick?: () => void;
  className?: string;
  isClickable?: boolean;
  formattedDate: string;
};

export function PostItem({ post, replyCount, onReplyClick, className, isClickable = true, formattedDate }: Props) {
  const isReply = !!post.parent_id;
  const content = <PostItemBase content={post.content} region={post.region} timestamp={formattedDate} replyCount={isReply ? undefined : replyCount} onClick={isReply ? undefined : onReplyClick} className={className} />;

  if (isReply || !isClickable) {
    return content;
  }

  return (
    <Link href={`/posts/${post.id}`} className="block hover:bg-app-background-hover transition-colors">
      {content}
    </Link>
  );
}
