import { AlbumsData } from "@/utils/songs-data";
import { TrackCard } from "../track-card";

export function NewSongsSection() {
  return (
    <div className="flex w-full flex-col items-start gap-y-2">
      <div className="w-full items-center justify-between flex">
        <h4 className="text-white text-xl font-bold">
          Trending albuns of the week
        </h4>

        <button className="font-bold text-neutral-200 text-xs">See more</button>
      </div>

      <div className="w-full flex hide-scroll items-center overflow-x-auto">
        {AlbumsData?.map((song) => (
          <TrackCard isAlbum {...song} />
        ))}
      </div>
    </div>
  );
}
