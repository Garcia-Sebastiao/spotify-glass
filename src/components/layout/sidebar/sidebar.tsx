import clsx from "clsx";
import { SpotifyIcon } from "../../../assets/icons/spotify-icon";
import { useSidebarItems } from "./use-sidebar-items";

export function Sidebar() {
  const { items } = useSidebarItems();
  return (
    <div className="flex-1 max-w-32 flex flex-col gap-y-3 justify-center items-center">
      <div className="w-16 h-16 glass gap-y-2 rounded-full flex items-center justify-center">
        <div className="flex items-center justify-center w-10 h-10">
          <SpotifyIcon />
        </div>
      </div>

      <div className="glass gap-y-1 w-16 min-h-16 flex flex-col justify-center items-center p-1 rounded-full">
        {items?.map((item) => (
          <button
            className={clsx(
              "w-13 h-13 flex items-center text-white transition-all cursor-pointer hover:bg-white/20 justify-center rounded-full",
              item.active && "bg-white/30"
            )}
            key={item.id}
            title={item.label}
          >
            <item.icon className="w-5 h-5 " />
          </button>
        ))}
      </div>
    </div>
  );
}
