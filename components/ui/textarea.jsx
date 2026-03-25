import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[168px] w-full rounded-2xl border border-[#dbdbd3] bg-white px-4 py-3 text-base text-parktek-ink outline-none transition placeholder:text-[#8b8b82] focus-visible:border-parktek-yellow focus-visible:ring-2 focus-visible:ring-parktek-yellow/30",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
