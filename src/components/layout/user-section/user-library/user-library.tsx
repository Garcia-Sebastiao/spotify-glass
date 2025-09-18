import { Avatar } from "@/components/shared/avatar/avatar";
import {
  ArrowRightIcon,
  ChevronDown,
  Library,
  Plus,
  SearchIcon,
} from "lucide-react";
import { useLibraryItems } from "./use-library-items";

export function UserLibrary() {
  const { items } = useLibraryItems();

  return (
    <div className="card flex flex-col flex-1 gap-y-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-x-2">
          <Library className="text-white w-5 h-5" />
          <span className="text-white font-semibold text-sm">My Library</span>
        </div>

        <div className="flex items-center">
          <button className="w-8 h-8 hover:bg-white/20 transition-all flex items-center justify-center rounded-full">
            <Plus className="w-5 h-5 text-neutral-200" />
          </button>

          <button className="w-8 h-8 hover:bg-white/20 transition-all flex items-center justify-center rounded-full">
            <ArrowRightIcon className="w-5 h-5 text-neutral-200" />
          </button>
        </div>
      </div>

      <div className="flex -mt-1 items-center gap-x-2">
        <span className="text-xs text-white rounded-full p-1 px-2 bg-white/20 font-medium">
          Playlist
        </span>

        <span className="text-xs text-white rounded-full p-1 px-2 bg-white/20 font-medium">
          Relaxing
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <div className="flex gap-x-2">
          <button className="hover:text-white text-neutral-200 transition-all flex items-center justify-center rounded-full">
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-x-1">
          <span className="text-xs font-medium text-neutral-200">Recente</span>
          <ChevronDown className="w-3 h-3 text-neutral-200" />
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-4">
        {items?.map((item) => (
          <div key={item?.id} className="flex items-center gap-x-2">
            <Avatar
              src={item?.cover}
              className="!rounded-sm w-10 h-10"
              name="The Rabbits"
            />

            <div className="flex flex-col gap-y-0.5">
              <span className="text-white text-sm font-medium">
                {item?.name}
              </span>
              <span className="text-neutral-200 text-xs">{item?.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
