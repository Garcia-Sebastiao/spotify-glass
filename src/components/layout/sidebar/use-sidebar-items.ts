import { Bell, HomeIcon, Library, SearchIcon } from "lucide-react";

type SidebarItem = {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  active?: boolean;
};

export function useSidebarItems(): { items: SidebarItem[] } {
  const pathname = window.location.pathname;

  const items: SidebarItem[] = [
    {
      id: "home",
      icon: HomeIcon,
      label: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      id: "search",
      icon: SearchIcon,
      label: "Search",
      href: "/search",
      active: pathname === "/search",
    },
    {
      id: "library",
      icon: Library,
      label: "Your Library",
      href: "/library",
      active: pathname === "/library",
    },
    {
      id: "notifications",
      icon: Bell,
      label: "Notifications",
      href: "/notifications",
      active: pathname === "/notifications",
    },
  ];

  return { items };
}
