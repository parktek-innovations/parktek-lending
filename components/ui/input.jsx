import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      className={cn(
        "flex h-14 w-full rounded-2xl border border-[#dbdbd3] bg-white px-4 py-3 text-base text-parktek-ink outline-none transition placeholder:text-[#8b8b82] focus-visible:border-parktek-yellow focus-visible:ring-2 focus-visible:ring-parktek-yellow/30",
        className
      )}
      ref={ref}
      type={type}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
