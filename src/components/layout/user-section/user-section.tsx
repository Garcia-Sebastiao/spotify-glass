import { UserCard } from "./user-card";
import { UserLibrary } from "./user-library/user-library";

export function UserSection() {
  return (
    <div className="flex-1 gap-y-5 flex flex-col items-start  min-w-[260px] max-w-[260px]">
      <UserCard />
      <UserLibrary />
    </div>
  );
}
