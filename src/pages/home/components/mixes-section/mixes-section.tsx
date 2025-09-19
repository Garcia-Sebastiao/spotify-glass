import { MixesData } from "@/utils/songs-data";
import { TrackCard } from "../track-card";

export function MixesSection() {
  return (
    <div className="flex w-full flex-col items-start gap-y-2">
      <div className="w-full items-center justify-between flex">
        <div className="flex flex-col items-start">
          <span className="text-xs text-neutral-200">Made for</span>
          <h4 className="text-white text-xl font-bold">aboycalledgarcia🪐</h4>
        </div>

        <button className="font-bold text-neutral-200 text-xs">See more</button>
      </div>

      <div className="w-full flex hide-scroll items-center overflow-x-auto">
        {MixesData?.map((song) => (
          <TrackCard isPlaylist {...song} />
        ))}
      </div>
    </div>
  );
}
