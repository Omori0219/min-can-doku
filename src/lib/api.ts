import { supabase } from "./supabase";
import { Post, CreatePostInput } from "@/types/post";

/**
 * 投稿を作成する
 */
export const createPost = async (input: CreatePostInput): Promise<Post> => {
  const { data, error } = await supabase.from("posts").insert([input]).select().single();

  if (error) throw error;
  return data;
};

/**
 * 投稿一覧を取得する
 */
export async function getPosts() {
  const { data, error } = await supabase.from("posts").select().is("parent_id", null).order("created_at", { ascending: false }).limit(20).returns<Post[]>();

  if (error) {
    console.error("投稿取得エラー:", error);
    return [];
  }

  return data;
}

/**
 * 返信を取得する
 */
export const getReplies = async (parentId: string): Promise<Post[]> => {
  const { data, error } = await supabase.from("posts").select().eq("parent_id", parentId).order("created_at", { ascending: true });

  if (error) throw error;
  return data || [];
};

/**
 * 返信数を取得する
 */
export async function getReplyCount(postIds: string[]) {
  const { data, error } = await supabase.from("posts").select("parent_id").in("parent_id", postIds).returns<{ parent_id: string }[]>();

  if (error) {
    console.error("返信数取得エラー:", error);
    return {};
  }

  const counts = data.reduce<Record<string, number>>((acc, { parent_id }) => {
    acc[parent_id] = (acc[parent_id] || 0) + 1;
    return acc;
  }, {});

  // 返信が0件の投稿のために、すべてのpostIdsに対してcountsを初期化
  postIds.forEach((id) => {
    if (!(id in counts)) {
      counts[id] = 0;
    }
  });

  return counts;
}
