"use client";

import { useState } from "react";
import { FloatingActionButton } from "./FloatingActionButton";
import { PostFormModal } from "./PostFormModal";
import { createPostAction } from "@/app/actions";
import { Region } from "@/types/post";

export function PostFormSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (content: string, region: Region) => {
    const result = await createPostAction(content, region);
    return result;
  };

  return (
    <>
      <FloatingActionButton onClick={() => setIsModalOpen(true)} />
      <PostFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
    </>
  );
}
