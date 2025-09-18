import {
  Avatar as ShadCnAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

type AvatarProps = {
  className?: string;
  src: string;
  name: string;
};

export function Avatar({ className, name, src }: AvatarProps) {
  return (
    <ShadCnAvatar className={className}>
      <AvatarImage src={src} className={className} alt={name} />
      <AvatarFallback>CN</AvatarFallback>
    </ShadCnAvatar>
  );
}
