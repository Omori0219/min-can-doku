export const dynamic = "force-dynamic";

import { TimelineSection } from "@/components/post/TimelineSection";
import { PostFormSection } from "@/components/post/PostFormSection";

export default function Home() {
  return (
    <>
      <TimelineSection />
      <PostFormSection />
    </>
  );
}
