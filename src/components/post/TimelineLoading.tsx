import { PostItemBase } from "./PostItemBase";

export function TimelineLoading() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <PostItemBase key={i} isLoading />
      ))}
    </div>
  );
}
