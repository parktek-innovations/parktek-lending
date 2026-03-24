import { cn } from "@/lib/utils";

const roadLabels = [
  { left: 1046, top: 938.1541 },
  { left: 1173.0001, top: 855.1541 },
  { left: 1300.0001, top: 772.1541 },
  { left: 1427.0001, top: 689.1541 },
  { left: 1554.0001, top: 606.1541 },
  { left: 1681.0001, top: 523.1541 }
];

function Layer({ alt = "", className = "", src, style }) {
  return <img alt={alt} className={cn("absolute select-none", className)} src={src} style={style} />;
}

export function RoadArt({ className = "" }) {
  return (
    <div className={cn("pointer-events-none absolute overflow-hidden", className)}>
      <Layer
        src="/figma/road/group-04.svg"
        style={{ left: -394.745, top: 263.725, width: 2233.705, height: 753.203 }}
      />
      <Layer
        src="/figma/road/group-05.svg"
        style={{ left: 1029.047, top: 404.812, width: 837.206, height: 1581.516 }}
      />
      <div
        className="absolute rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,246,168,0.18) 0%, rgba(255,244,141,0.58) 14%, rgba(255,241,109,0.92) 30%, #dacd00 54%, #dacd00 100%)",
          height: 21.254,
          left: 5.85,
          top: 1592.773,
          transform: "rotate(-33.38deg)",
          transformOrigin: "0 50%",
          width: 2896.41
        }}
      />

      <div
        className="absolute"
        style={{ left: 171.853, top: 1345.645, width: 145.76, height: 97.557 }}
      >
        <Layer src="/figma/road/group-14.svg" style={{ left: 0, top: 0, width: 145.76, height: 97.557 }} />
        <Layer src="/figma/road/group-15.svg" style={{ left: 33.05, top: 22.01, width: 78.047, height: 52.232 }} />
        <Layer src="/figma/road/group-16.svg" style={{ left: 28.41, top: 17.35, width: 87.338, height: 61.531 }} />
      </div>

      <Layer
        src="/figma/road/group-08.svg"
        style={{ left: 1516.052, top: 522.159, width: 78.045, height: 52.231 }}
      />
      <Layer
        src="/figma/road/group-10.svg"
        style={{ left: 1525.462, top: 551.154, width: 78.059, height: 52.24, opacity: 0.42 }}
      />

      <div
        className="absolute"
        style={{ left: 1402.672, top: 493.257, width: 173.36, height: 211.683 }}
      >
        <Layer src="/figma/road/group-23.svg" style={{ left: 30, top: 0, width: 34.328, height: 47.198 }} />
        <Layer src="/figma/road/group-24.svg" style={{ left: 41, top: 8, width: 12.688, height: 23.198 }} />
        <Layer src="/figma/road/group-22.svg" style={{ left: 45, top: 44, width: 4.021, height: 63.261 }} />
        <Layer src="/figma/road/group-25.svg" style={{ left: 49, top: 110, width: 19.175, height: 83.178 }} />
        <Layer src="/figma/road/group-26.svg" style={{ left: 49, top: 119, width: 4.955, height: 71.973 }} />
        <Layer src="/figma/road/group-27.svg" style={{ left: 63.3, top: 110, width: 4.955, height: 73.702 }} />
        <Layer src="/figma/road/group-28.svg" style={{ left: 42.5, top: 95.5, width: 29.086, height: 20.388 }} />
        <Layer src="/figma/road/group-29.svg" style={{ left: 37, top: 131, width: 13.261, height: 10.847 }} />
        <Layer src="/figma/road/group-30.svg" style={{ left: 55, top: 146, width: 13.261, height: 10.847 }} />
        <Layer src="/figma/road/group-31.svg" style={{ left: 72.5, top: 160.5, width: 13.261, height: 10.849 }} />
      </div>

      <div className="absolute" style={{ left: 1147, top: 612, width: 485, height: 407 }}>
        <div
          className="absolute left-[162px] top-[26px] h-[378px] w-[527px] origin-top-left -rotate-[53.35deg]"
          style={{ opacity: 0.9 }}
        >
          <img
            alt=""
            className="size-full"
            src="/figma/road/group-51.svg"
          />
        </div>
      </div>

      <Layer
        src="/figma/road/group-49.svg"
        style={{ left: 1639.214, top: 245.987, width: 88.787, height: 10.018 }}
      />
      <Layer
        src="/figma/road/group-50.svg"
        style={{ left: 1708.798, top: 211.988, width: 19.204, height: 89.151 }}
      />

      <div className="absolute left-[1512.19px] top-[159.835px] h-[53.803px] w-[146.447px] origin-top-left -rotate-[53.35deg]">
        <img alt="" className="size-full" src="/figma/road/group-55.svg" />
      </div>
      <div className="absolute left-[1527.304px] top-[181.585px] h-[51.837px] w-[129.97px] origin-top-left -rotate-[53.35deg]">
        <img alt="" className="size-full" src="/figma/road/group-54.svg" />
      </div>
      <div className="absolute left-[1576.255px] top-[215.087px] h-[56.027px] w-[36.589px] origin-top-left -rotate-[53.35deg]">
        <img alt="" className="size-full" src="/figma/road/group-52.svg" />
      </div>
      <div className="absolute left-[1613.742px] top-[244.721px] h-[10.058px] w-[10.071px] origin-top-left -rotate-[53.35deg]">
        <img alt="" className="size-full" src="/figma/road/group-53.svg" />
      </div>
      <div className="absolute left-[1543.746px] top-[304.239px] h-[14.305px] w-[7.724px] origin-top-left -rotate-[53.35deg]">
        <img alt="" className="size-full" src="/figma/road/group-56.svg" />
      </div>
      <div className="absolute left-[1542.806px] top-[295.412px] h-[21.179px] w-[11.432px] origin-top-left -rotate-[53.35deg]">
        <img alt="" className="size-full" src="/figma/road/group-57.svg" />
      </div>
      <div className="absolute left-[1585.959px] top-[209.157px] h-[8.032px] w-[25.128px] origin-top-left -rotate-[53.35deg]">
        <img alt="" className="size-full" src="/figma/road/group-58.svg" />
      </div>

      {roadLabels.map((item) => (
        <div
          className="absolute font-clash text-[18px] tracking-[0.04em] text-[#fff7a1]"
          key={`${item.left}-${item.top}`}
          style={{ left: item.left, top: item.top, transform: "rotate(-33.2deg)" }}
        >
          Parktek
        </div>
      ))}
    </div>
  );
}
