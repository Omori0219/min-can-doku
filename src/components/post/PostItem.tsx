"use client";

import { Post } from "@/types/post";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ja";

dayjs.extend(relativeTime);
dayjs.locale("ja");

type Props = {
  post: Post;
  replyCount?: number;
  onReplyClick?: () => void;
};

export const PostItem = ({ post, replyCount, onReplyClick }: Props) => {
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

  return (
    <div className="border rounded-lg p-4 space-y-2">
      <div className="text-lg break-all whitespace-pre-wrap">{post.content}</div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <span>{post.region}</span>
          <span>•</span>
          <span>{formattedDate}</span>
        </div>
        {onReplyClick && (
          <button onClick={onReplyClick} className="hover:text-blue-500 transition-colors">
            {replyCount ? `返信 ${replyCount}件` : "返信する"}
          </button>
        )}
      </div>
    </div>
  );
};
