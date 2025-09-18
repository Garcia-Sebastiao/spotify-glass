import { DefaultBg } from "../../assets/backgrounds";

export function BackgroundImage() {
  return (
    <img
      className="w-full absolute inset-0 top-0 left-0 h-full object-cover"
      src={DefaultBg}
      alt="Default background"
    />
  );
}
