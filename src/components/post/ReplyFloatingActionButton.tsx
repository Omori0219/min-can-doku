"use client";

import { MessageCircle } from "lucide-react";

type Props = {
  onClick: () => void;
};

export const ReplyFloatingActionButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center" aria-label="返信する">
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};
