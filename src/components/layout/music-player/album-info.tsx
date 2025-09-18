"use client";

import { Heart } from "lucide-react";
import { Avatar } from "@/components/shared/avatar/avatar";

interface AlbumInfoProps {
  albumArt: string;
  title: string;
  artist: string;
  isLiked?: boolean;
  onToggleLike?: () => void;
}

export function AlbumInfo({
  albumArt,
  title,
  artist,
  isLiked = false,
  onToggleLike,
}: AlbumInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        src={albumArt || "/placeholder.svg"}
        name={`${title} album cover`}
        className="w-10 h-10 !rounded-md object-cover"
      />
      <div className="min-w-0 flex-1">
        <h3 className="text-white font-medium text-sm truncate">{title}</h3>
        <p className="text-gray-400 text-xs truncate">{artist}</p>
      </div>

      <button onClick={onToggleLike} aria-label="Like or unlike">
        <Heart
          className={`w-4 h-4 ${
            isLiked ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
        />
      </button>
    </div>
  );
}
