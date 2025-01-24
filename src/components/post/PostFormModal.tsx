"use client";

import { useState } from "react";
import { Region } from "@/types/post";
import { validateContent } from "@/lib/validation";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (content: string, region: Region) => Promise<{ success: boolean; error?: string }>;
};

export function PostFormModal({ isOpen, onClose, onSubmit }: Props) {
  const [content, setContent] = useState("");
  const [region, setRegion] = useState<Region>("please 選択");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // 入力値のバリデーション
    const contentError = validateContent(content);
    if (contentError) {
      setError(contentError);
      return;
    }

    // 地域のバリデーション
    if (region === "please 選択") {
      setError("please 地域選択");
      return;
    }

    const result = await onSubmit(content, region);
    if (result.success) {
      setContent("");
      setRegion("please 選択");
      onClose();
    } else if (result.error) {
      setError(result.error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">新規投稿</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                地域
              </label>
              <select id="region" value={region} onChange={(e) => setRegion(e.target.value as Region)} className="w-full rounded-lg border p-2">
                <option value="please 選択">please 選択</option>
                <option value="日本">日本</option>
                <option value="中国">中国</option>
                <option value="台湾">台湾</option>
                <option value="香港">香港</option>
              </select>
            </div>
            <div>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full rounded-lg border p-2" rows={4} placeholder="投稿内容を入力" />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                投稿
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
