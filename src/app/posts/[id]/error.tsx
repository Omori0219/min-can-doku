"use client";

import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">
      <h1 className="text-2xl font-bold">不具合 happen !</h1>
      <p className="text-gray-500">{error.message}</p>
      <div className="flex space-x-4">
        <button onClick={reset} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          試 again
        </button>
        <Link href="/" className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          back 拠点
        </Link>
      </div>
    </div>
  );
}
