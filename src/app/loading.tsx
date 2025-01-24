import { TimelineLoading } from "@/components/post/TimelineLoading";

export default function Loading() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-app-text-heading">new 投稿</h2>
        <TimelineLoading />
      </section>
    </div>
  );
}
