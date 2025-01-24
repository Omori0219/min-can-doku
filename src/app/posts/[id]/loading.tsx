import { TimelineLoading } from "@/components/post/TimelineLoading";

export default function Loading() {
  return (
    <div className="space-y-8">
      <section>
        <div className="border rounded-lg p-4 space-y-2 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-3 bg-gray-200 rounded w-16" />
              <div className="h-3 bg-gray-200 rounded w-3" />
              <div className="h-3 bg-gray-200 rounded w-24" />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">返信する</h2>
        <div className="border rounded-lg p-4 space-y-4 animate-pulse">
          <div className="h-24 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">返信一覧</h2>
        <TimelineLoading />
      </section>
    </div>
  );
}
