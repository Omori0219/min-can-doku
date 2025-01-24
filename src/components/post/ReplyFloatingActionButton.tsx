"use client";

import { Reply } from "lucide-react";

type Props = {
  onClick: () => void;
};

export const ReplyFloatingActionButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="fixed bottom-6 right-6 w-14 h-14 bg-app-action-primary text-white rounded-full shadow-lg hover:bg-app-action-hover transition-colors flex items-center justify-center" aria-label="返信">
      <Reply className="w-6 h-6" />
    </button>
  );
};
