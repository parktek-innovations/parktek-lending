import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  className,
  label,
  desktop = "1600x900",
  tablet = "1024x768",
  mobile = "750x1000",
}) {
  return (
    <div
      className={cn(
        "placeholder-mesh relative overflow-hidden rounded-xl border border-dashed border-primary-subtleBorder bg-primary-subtle/70 p-4",
        className
      )}
    >
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/15 blur-3xl" />
      <div className="relative z-10 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Image Placeholder</p>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <div className="space-y-1 text-xs text-muted-foreground">
          <p>Desktop: {desktop}</p>
          <p>Tablet: {tablet}</p>
          <p>Mobile: {mobile}</p>
        </div>
      </div>
    </div>
  );
}
