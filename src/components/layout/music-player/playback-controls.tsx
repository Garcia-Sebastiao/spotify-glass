"use client";

import { Play, Pause, SkipBack, SkipForward, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaybackControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onShuffle?: () => void;
  onClose?: () => void;
}

export function PlaybackControls({
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
  onClose,
}: PlaybackControlsProps) {
  return (
    <div className="flex items-center gap-2">
      {onClose && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="p-2 hover:bg-gray-700"
        >
          <X className="w-4 h-4 text-gray-400" />
        </Button>
      )}

      <Button
        variant="ghost"
        size="sm"
        onClick={onPrevious}
        className="p-2 hover:bg-gray-700"
      >
        <SkipBack className="w-5 h-5 text-white" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={onPlayPause}
        className="p-2 hover:bg-gray-700"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-white" />
        ) : (
          <Play className="w-6 h-6 text-white" />
        )}
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={onNext}
        className="p-2 hover:bg-gray-700"
      >
        <SkipForward className="w-5 h-5 text-white" />
      </Button>
    </div>
  );
}
