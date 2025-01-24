import { TimelineSection } from "@/components/post/TimelineSection";
import { PostFormSection } from "@/components/post/PostFormSection";

export default function Home() {
  return (
    <>
      <div className="space-y-8">
        <TimelineSection />
      </div>
      <PostFormSection />
    </>
  );
}
