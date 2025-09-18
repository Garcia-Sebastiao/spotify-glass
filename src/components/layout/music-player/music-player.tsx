"use client";

import { useState } from "react";
import { PlaybackControls } from "./playback-controls";
import { ProgressBar } from "./progress-bar";
import { PlayerControls } from "./player-controls";
import { AlbumInfo } from "./album-info";

interface Track {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  duration: number;
}

interface MusicPlayerProps {
  track: Track;
  isPlaying?: boolean;
  currentTime?: number;
  onPlayPause?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  onSeek?: (time: number) => void;
  onClose?: () => void;
}

export function MusicPlayer({
  track,
  isPlaying = false,
  currentTime = 60,
  onPlayPause = () => {},
  onPrevious = () => {},
  onNext = () => {},
  onSeek = () => {},
  onClose,
}: MusicPlayerProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-black/30 w-full px-4 py-3">
      <div className="w-full flex items-center justify-between gap-4 max-w-screen-2xl mx-auto">
        <div className="max-w-xs">
          <AlbumInfo
            albumArt={track.albumArt}
            title={track.title}
            artist={track.artist}
            isLiked={isLiked}
            onToggleLike={handleToggleLike}
          />
        </div>

        <div className="min-w-xl flex flex-col items-center gap-2 max-w-2xl">
          <PlaybackControls
            isPlaying={isPlaying}
            onPlayPause={onPlayPause}
            onPrevious={onPrevious}
            onNext={onNext}
            onClose={onClose}
          />

          <div className="w-full max-w-lg">
            <ProgressBar
              currentTime={currentTime}
              duration={track.duration}
              onSeek={onSeek}
            />
          </div>
        </div>

        <div className="min-w-0 max-w-xs flex justify-end">
          <PlayerControls />
        </div>
      </div>
    </div>
  );
}
