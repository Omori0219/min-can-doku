"use client";

import { useState } from "react";
import { ReplyFloatingActionButton } from "./ReplyFloatingActionButton";
import { PostFormModal } from "./PostFormModal";
import { Region } from "@/types/post";

type Props = {
  onSubmit: (content: string, region: Region) => Promise<{ success: boolean; error?: string }>;
  parent_id: string;
};

export function ReplyFormSection({ onSubmit, parent_id }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ReplyFloatingActionButton onClick={() => setIsModalOpen(true)} />
      <PostFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={onSubmit} />
    </>
  );
}
