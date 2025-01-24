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
export const getPosts = async (limit = 20): Promise<Post[]> => {
  const { data, error } = await supabase.from("posts").select("*").is("parent_id", null).order("created_at", { ascending: false }).limit(limit);

  if (error) throw error;
  return data;
};

/**
 * 返信を取得する
 */
export const getReplies = async (parentId: string): Promise<Post[]> => {
  const { data, error } = await supabase.from("posts").select("*").eq("parent_id", parentId).order("created_at", { ascending: true });

  if (error) throw error;
  return data;
};

/**
 * 返信数を取得する
 */
export const getReplyCount = async (postIds: string[]): Promise<Record<string, number>> => {
  const { data, error } = await supabase.from("posts").select("parent_id, count(*)").in("parent_id", postIds).groupBy("parent_id");

  if (error) throw error;

  return Object.fromEntries(data.map(({ parent_id, count }) => [parent_id, Number(count)]));
};
