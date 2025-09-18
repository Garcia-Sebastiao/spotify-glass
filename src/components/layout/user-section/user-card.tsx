import { Avatar } from "@/components/shared/avatar/avatar";

export function UserCard() {
  return (
    <div className="card flex items-center gap-x-3">
      <Avatar
        className="w-10 h-10"
        src="https://github.com/shadcn.png"
        name="Garcia"
      />

      <div className="flex flex-col gap-y-0.5">
        <span className="text-white text-sm font-medium">aboycalledgarcia🪐</span>
        <span className="text-neutral-200 text-xs">Pro Subscriber</span>
      </div>
    </div>
  );
}
