import clsx from "clsx";
import { useState } from "react";

type TrackCardProps = {
  label?: string;
  cover: string;
  href: string;
  artist?: string;
  title?: string;
  category?: string;
  isAlbum?: boolean;
  isPlaylist?: boolean;
};

export function TrackCard({ ...props }: TrackCardProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="flex cursor-pointer flex-col gap-2 min-w-40 max-w-40 p-2 rounded-md hover:bg-white/10 transition"
    >
      <div className="w-full overflow-hidden h-36 rounded-md">
        <img
          src={props?.cover}
          className={clsx(
            "w-full bg-black/10 h-full object-cover transition-all duration-1000",
            isHovering && "scale-125 rotate-12"
          )}
          alt={`${props?.label} cover image`}
        />
      </div>

      {props?.isPlaylist && (
        <span className="text-xs text-neutral-200">{props?.label}</span>
      )}

      {props?.isAlbum && (
        <div className="flex flex-col gap-y-0.5">
          <span className="text-sm text-white font-medium">{props?.title}</span>
          <span className="text-xs text-neutral-200">{props?.artist}</span>
        </div>
      )}
    </div>
  );
}
