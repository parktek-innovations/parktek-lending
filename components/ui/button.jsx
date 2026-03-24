import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-parktek-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-parktek-cream disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-parktek-ink text-white hover:bg-parktek-ink/90",
        outline:
          "border border-parktek-ink bg-white text-parktek-ink hover:bg-black/[0.03]",
        ghost:
          "text-parktek-ink hover:bg-black/[0.04]",
        accent:
          "border-[3px] border-parktek-yellow bg-transparent text-parktek-yellow hover:bg-parktek-yellow/10"
      },
      size: {
        default: "h-12 px-6",
        lg: "h-[67px] px-9 text-[20.856px]",
        pill: "h-[59px] rounded-[36px] px-[27.6px] text-[19.2px]"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
