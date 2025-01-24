"use client";

import { Plus } from "lucide-react";

type Props = {
  onClick: () => void;
};

export function FloatingActionButton({ onClick }: Props) {
  return (
    <div className="fixed bottom-16 right-0 left-0 container mx-auto max-w-2xl px-4">
      <button onClick={onClick} className="absolute right-4 rounded-full bg-app-action-primary p-4 text-white shadow-lg hover:bg-app-action-hover">
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
}
