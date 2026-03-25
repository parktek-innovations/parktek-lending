import { cn } from "@/lib/utils";

export function RoadArt({ className = "" }) {
  return (
    <img
      alt=""
      className={cn("pointer-events-none absolute select-none", className)}
      height="2160"
      src="/figma/SVG.svg"
      width="1728"
    />
  );
}
