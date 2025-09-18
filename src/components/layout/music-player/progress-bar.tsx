"use client";

import { Slider } from "@/components/ui/slider";

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function ProgressBar({
  currentTime,
  duration,
  onSeek,
}: ProgressBarProps) {
  const handleValueChange = (value: number[]) => {
    onSeek(value[0]);
  };

  return (
    <div className="flex items-center gap-3 flex-1 min-w-0">
      <span className="text-xs text-white flex-shrink-0">
        {formatTime(currentTime)}
      </span>

      <div className="flex-1 min-w-0">
        <Slider
          value={[currentTime]}
          max={duration}
          step={1}
          onValueChange={handleValueChange}
          className="w-full"
        />
      </div>

      <span className="text-xs text-white flex-shrink-0">
        {formatTime(duration)}
      </span>
    </div>
  );
}
