// 地域の型定義
export type Region = "日本" | "中国" | "台湾" | "香港" | "他";

// 投稿データの型定義
export type Post = {
  id: string;
  content: string;
  region: Region;
  parent_id: string | null;
  created_at: string;
  updated_at: string;
};

// 新規投稿用の型定義
export type CreatePostInput = {
  content: string;
  region: Region;
  parent_id?: string;
};
