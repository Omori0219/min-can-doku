export const TimelineLoading = () => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="p-2 animate-pulse">
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
      ))}
    </div>
  );
};
