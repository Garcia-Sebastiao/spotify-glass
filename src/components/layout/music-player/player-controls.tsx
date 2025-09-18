"use client";

import { Volume2, List, Monitor, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlayerControlsProps {
  onVolumeClick?: () => void;
  onPlaylistClick?: () => void;
  onDeviceClick?: () => void;
  onMoreClick?: () => void;
}

export function PlayerControls({
  onVolumeClick,
  onPlaylistClick,
  onDeviceClick,
  onMoreClick,
}: PlayerControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={onPlaylistClick}
        className="p-2 hover:bg-gray-700"
      >
        <Monitor className="w-4 h-4 text-gray-400" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={onDeviceClick}
        className="p-2 hover:bg-gray-700"
      >
        <List className="w-4 h-4 text-gray-400" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={onVolumeClick}
        className="p-2 hover:bg-gray-700"
      >
        <Volume2 className="w-4 h-4 text-gray-400" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={onMoreClick}
        className="p-2 hover:bg-gray-700"
      >
        <MoreHorizontal className="w-4 h-4 text-gray-400" />
      </Button>
    </div>
  );
}
