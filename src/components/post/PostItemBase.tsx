"use client";

import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";

type BaseProps = {
  content?: React.ReactNode;
  region?: string;
  timestamp?: string;
  replyCount?: number;
  replyLabel?: string;
  noPostsLabel?: string;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
  renderWrapper?: (children: React.ReactNode) => React.ReactNode;
};

export function PostItemBase({ content, region, timestamp, replyCount, replyLabel = "返信", noPostsLabel = "投稿がありません", isLoading, className, onClick, renderWrapper = (children) => children }: BaseProps) {
  if (isLoading) {
    return renderWrapper(
      <div className={cn("p-4 border rounded-lg animate-pulse", className)}>
        <div className="space-y-2">
          <div className="flex gap-3">
            {/* アイコンのスケルトン */}
            <div className="flex-shrink-0 w-icon h-icon rounded-full bg-app-background-icon" />

            {/* 投稿内容のスケルトン */}
            <div className="flex-1 min-w-0 space-y-2">
              {/* 投稿本文 */}
              <div className="space-y-1">
                <div className="h-4 bg-app-background-icon rounded w-3/4" />
                <div className="h-4 bg-app-background-icon rounded w-1/2" />
              </div>
              {/* 日時と返信数 */}
              <div className="flex items-center gap-4">
                <div className="h-3 bg-app-background-icon rounded w-16" />
                <div className="h-3 bg-app-background-icon rounded w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const baseContent = (
    <div className={cn("p-4 border rounded-lg", className)}>
      <div className="space-y-2">
        <div className="flex gap-3">
          {/* アイコン */}
          <Avatar region={region || ""} />

          {/* 投稿内容 */}
          <div className="flex-1 min-w-0">
            <div className="text-post-body text-app-text-primary break-all whitespace-pre-wrap">{content}</div>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-post-caption text-app-text-secondary">{timestamp}</span>
              {replyCount !== undefined && (
                <span className="text-post-caption text-app-text-secondary">
                  {replyLabel} {replyCount}件
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (onClick) {
    return renderWrapper(<div onClick={onClick}>{baseContent}</div>);
  }

  return renderWrapper(baseContent);
}
