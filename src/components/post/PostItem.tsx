"use client";

import { Post } from "@/types/post";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ja";
import Link from "next/link";
import { cn } from "@/lib/utils";

dayjs.extend(relativeTime);
dayjs.locale("ja");

type Props = {
  post: Post;
  replyCount?: number;
  onReplyClick?: () => void;
  className?: string;
};

export const PostItem = ({ post, replyCount, onReplyClick, className }: Props) => {
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
    <div className={cn("border rounded-lg p-4 space-y-2 hover:bg-gray-50 transition-colors", className)}>
      <div className="text-lg break-all whitespace-pre-wrap">{post.content}</div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <span>{post.region}</span>
          <span>•</span>
          <span>{formattedDate}</span>
        </div>
        {onReplyClick && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onReplyClick();
            }}
            className="hover:text-blue-500 transition-colors"
          >
            {replyCount ? `返信 ${replyCount}件` : "返信する"}
          </button>
        )}
      </div>
    </div>
  );

  if (post.parent_id) {
    return content;
  }

  return <Link href={`/posts/${post.id}`}>{content}</Link>;
};
