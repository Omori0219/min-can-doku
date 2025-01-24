"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  region: string;
  imageUrl?: string;
  className?: string;
};

export const Avatar = ({ region, imageUrl, className }: Props) => {
  return (
    <div className={cn("flex-shrink-0 w-icon h-icon rounded-full bg-app-background-icon flex items-center justify-center overflow-hidden", className)}>{imageUrl ? <Image src={imageUrl} alt={`${region}のアバター`} width={38} height={38} className="object-cover" loading="lazy" /> : <span className="text-post-body text-app-text-primary">{region}</span>}</div>
  );
};
