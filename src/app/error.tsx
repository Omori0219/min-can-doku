"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">
      <h1 className="text-2xl font-bold">不具合 happen !</h1>
      <p className="text-gray-500">{error.message}</p>
      <button onClick={reset} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        もう一度試す
      </button>
    </div>
  );
}
