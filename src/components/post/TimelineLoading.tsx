export const TimelineLoading = () => {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="border rounded-lg p-4 space-y-2 animate-pulse">
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
      ))}
    </div>
  );
};
