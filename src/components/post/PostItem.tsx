"use client";

import { Post } from "@/types/post";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";

type Props = {
  post: Post;
  replyCount?: number;
  onReplyClick?: () => void;
  className?: string;
  isClickable?: boolean;
  formattedDate: string;
};

export function PostItem({ post, replyCount, onReplyClick, className, isClickable = true, formattedDate }: Props) {
  const content = (
    <div className={cn("p-4 border rounded-lg", isClickable && "hover:bg-app-background-hover transition-colors", className)}>
      <div className="space-y-2">
        <div className="flex gap-3">
          {/* アイコン */}
          <Avatar region={post.region} />

          {/* 投稿内容 */}
          <div className="flex-1 min-w-0">
            <div className="text-post-body text-app-text-primary break-all whitespace-pre-wrap">{post.content}</div>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-post-caption text-app-text-secondary">{formattedDate}</span>
              {onReplyClick ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onReplyClick();
                  }}
                  className="text-post-caption text-app-text-secondary hover:text-app-action-primary transition-colors"
                >
                  返信する
                </button>
              ) : (
                replyCount !== undefined && <span className="text-post-caption text-app-text-secondary">返信 {replyCount}件</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (post.parent_id || !isClickable) {
    return content;
  }

  return (
    <Link href={`/posts/${post.id}`} className="block">
      {content}
    </Link>
  );
}
