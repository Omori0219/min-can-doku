"use client";

import { Plus } from "lucide-react";

type Props = {
  onClick: () => void;
};

export const FloatingActionButton = ({ onClick }: Props) => {
  return (
    <div className="fixed bottom-6 right-0 left-0 container mx-auto max-w-2xl px-4">
      <button onClick={onClick} className="absolute right-4 w-14 h-14 bg-app-action-primary text-white rounded-full shadow-lg hover:bg-app-action-hover transition-colors flex items-center justify-center" aria-label="新規投稿">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};
