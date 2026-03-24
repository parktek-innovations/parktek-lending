import * as React from "react";

import { cn } from "@/lib/utils";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    className={cn(
      "text-sm font-medium tracking-[0.02em] text-[#4b4b43]",
      className
    )}
    ref={ref}
    {...props}
  />
));

Label.displayName = "Label";

export { Label };
