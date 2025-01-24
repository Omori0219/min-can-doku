"use client";

import { useState } from "react";
import { Region } from "@/types/post";
import { validateContent, MAX_CONTENT_LENGTH } from "@/lib/validation";
import { useRouter } from "next/navigation";

type Props = {
  onSubmit: (content: string, region: Region) => Promise<{ success: boolean; error?: string }>;
  parent_id?: string;
};

export const PostForm = ({ onSubmit, parent_id }: Props) => {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [region, setRegion] = useState<Region>("日本");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateContent(content);
    if (validationError) {
      setError(validationError);
      return;
    }

    if (!isAgreed) {
      setError("please 規約 check");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    try {
      const result = await onSubmit(content, region);
      if (result.success) {
        setContent("");
        setError(null);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
        router.refresh();
      } else if (result.error) {
        setError(result.error);
      }
    } catch {
      setError("投稿 failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    const validationError = validateContent(newContent);
    setError(validationError);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <textarea value={content} onChange={handleContentChange} placeholder={parent_id ? "do 返信" : "can 使用：漢字or英字or記号"} className="w-full min-h-[100px] p-2 border rounded-md" disabled={isSubmitting} />
        <div className="text-sm text-gray-500">
          {content.length} / {MAX_CONTENT_LENGTH}字
        </div>
        {error && <div className="text-sm text-red-500">{error}</div>}
        {showSuccess && <div className="text-sm text-green-500">done 投稿</div>}
      </div>

      <div className="space-y-2">
        <label htmlFor="region" className="block text-sm font-medium text-app-text-primary">
          地域
        </label>
        <select id="region" value={region} onChange={(e) => setRegion(e.target.value as Region)} className="w-full p-2 border rounded-md" disabled={isSubmitting}>
          <option value="日本">日本</option>
          <option value="中国">中国</option>
          <option value="他">他</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <input type="checkbox" id="agreement" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} className="rounded" disabled={isSubmitting} />
        <label htmlFor="agreement" className="text-sm">
          規約 check 済？
        </label>
      </div>

      <button type="submit" disabled={isSubmitting || !content || !!error || !isAgreed} className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
        {isSubmitting ? "now 投稿ing..." : parent_id ? "do 返信" : "do 投稿"}
      </button>
    </form>
  );
};
