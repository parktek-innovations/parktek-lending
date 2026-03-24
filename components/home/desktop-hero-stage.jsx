"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const ARTBOARD_WIDTH = 1728;
const ARTBOARD_HEIGHT = 2245;

export function DesktopHeroStage({ art, className = "", copy, header, via }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return undefined;
    }

    const updateScale = () => {
      const nextScale = Math.min(1, element.clientWidth / ARTBOARD_WIDTH);
      setScale(nextScale || 1);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn("relative w-full max-w-[1728px] overflow-hidden", className)}
      ref={containerRef}
      style={{ height: `${ARTBOARD_HEIGHT * scale}px` }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          height: `${ARTBOARD_HEIGHT}px`,
          transform: `scale(${scale})`,
          width: `${ARTBOARD_WIDTH}px`
        }}
      >
        <div className="absolute left-[40px] top-[40px] z-20 w-[1648px]">{header}</div>
        <div className="absolute inset-x-0 top-[85px] h-[2160px]">{art}</div>
        <div className="absolute left-[40px] top-[236px] z-10">{copy}</div>
        <div className="absolute left-[201px] top-[1495px] z-10">{via}</div>
      </div>
    </div>
  );
}
