"use client";

import { Post } from "@/types/post";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ja";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";

dayjs.extend(relativeTime);
dayjs.locale("ja");

type Props = {
  post: Post;
  replyCount?: number;
  onReplyClick?: () => void;
  className?: string;
  isClickable?: boolean;
};

export const PostItem = ({ post, replyCount, onReplyClick, className, isClickable = true }: Props) => {
  const formattedDate = (() => {
    const date = dayjs(post.created_at);
    const now = dayjs();
    const diffHours = now.diff(date, "hour");

    if (diffHours < 24) {
      return date.fromNow();
    } else {
      return date.format("M月D日");
    }
  })();

  const content = (
    <div className={cn("p-4 hover:bg-app-background-hover transition-colors border-b border-app-border-light", className)}>
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
  );

  if (post.parent_id || !isClickable) {
    return content;
  }

  return <Link href={`/posts/${post.id}`}>{content}</Link>;
};
