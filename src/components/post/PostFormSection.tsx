"use client";

import { useState } from "react";
import { FloatingActionButton } from "./FloatingActionButton";
import { PostFormModal } from "./PostFormModal";
import { createPostAction } from "@/app/actions";

export function PostFormSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <FloatingActionButton onClick={() => setIsModalOpen(true)} />
      <PostFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={createPostAction} />
    </>
  );
}
