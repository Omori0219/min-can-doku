import { TimelineLoading } from "@/components/post/TimelineLoading";

export default function Loading() {
  return (
    <div className="space-y-8">
      <section>
        <div className="p-4 border-b border-app-border-light animate-pulse">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-icon h-icon rounded-full bg-app-background-icon" />
            <div className="flex-1 min-w-0 space-y-2">
              <div className="space-y-1">
                <div className="h-4 bg-app-background-icon rounded w-3/4" />
                <div className="h-4 bg-app-background-icon rounded w-1/2" />
              </div>
              <div className="flex items-center gap-4">
                <div className="h-3 bg-app-background-icon rounded w-16" />
                <div className="h-3 bg-app-background-icon rounded w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">list 返信</h2>
        <TimelineLoading />
      </section>
    </div>
  );
}
