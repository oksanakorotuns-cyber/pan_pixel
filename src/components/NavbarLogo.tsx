import svgPaths from "@/imports/BuildMvpForAiDesignCritic/svg-gc0z5n7rdu";
import { color } from "./tokens";

export default function NavbarLogo() {
  return (
    <div style={{ height: 38, width: 122, position: "relative", flexShrink: 0 }}>
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 122 38"
      >
        <g clipPath="url(#clip0_app_logo)">
          <g>
            <path d={svgPaths.p251b6580} fill={color.foreground} />
            <path d={svgPaths.p1d75d500} fill={color.foreground} />
            <path d={svgPaths.p185fad40} fill={color.foreground} />
            <path d={svgPaths.p14beb000} fill={color.foreground} />
            <path d={svgPaths.p7c358d0}  fill={color.foreground} />
            <path d={svgPaths.p3bf78280} fill={color.foreground} />
            <path d={svgPaths.p1629be00} fill={color.foreground} />
            <path d={svgPaths.p2bdec200} fill={color.foreground} />
          </g>
          <path
            d={svgPaths.p26263500}
            stroke={color.accent}
            strokeLinecap="round"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_app_logo">
            <rect fill="white" height="38" width="122" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
