import { TimelineLoading } from "@/components/post/TimelineLoading";

export default function Loading() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">新規投稿</h1>
        <div className="border rounded-lg p-4 space-y-4 animate-pulse">
          <div className="h-24 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">最新の投稿</h2>
        <TimelineLoading />
      </section>
    </div>
  );
}
