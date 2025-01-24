import { Timeline } from "./Timeline";
import { getPosts, getReplyCount } from "@/lib/api";

export async function PostTimeline() {
  const posts = await getPosts();
  const replyCount = posts.length > 0 ? await getReplyCount(posts.map((p) => p.id)) : {};

  return <Timeline posts={posts} replyCount={replyCount} />;
}
