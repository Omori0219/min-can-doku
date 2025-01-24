"use client";

import { X } from "lucide-react";
import { PostForm } from "./PostForm";
import { Region } from "@/types/post";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (content: string, region: Region) => Promise<{ success: boolean; error?: string }>;
  parent_id?: string;
};

export const PostFormModal = ({ isOpen, onClose, onSubmit, parent_id }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* モーダルコンテンツ */}
      <div className="relative w-full max-w-[598px] mx-4 bg-white rounded-lg shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">{parent_id ? "create 返信" : "create 投稿"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="close">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <PostForm
            onSubmit={async (content, region) => {
              const result = await onSubmit(content, region);
              if (result.success) {
                onClose();
              }
              return result;
            }}
            parent_id={parent_id}
          />
        </div>
      </div>
    </div>
  );
};
