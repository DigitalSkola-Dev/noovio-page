import { cn } from "@/lib/utils";

const OrnamentIcon = ({ width = 181, height = 196, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 181 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M136.318 223C119.796 210.531 104.163 196.936 89.5312 182.313C20.5877 113.706 -14.3203 37.2075 11.5213 11.4828C37.363 -14.242 114.209 20.5082 183.128 89.1397C197.817 103.705 211.474 119.268 224 135.714"
        stroke="url(#paint0_linear_8510_12719)"
        strokeOpacity="0.22"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M277 108.682C264.531 125.204 250.936 140.837 236.313 155.469C167.706 224.412 91.2075 259.32 65.4828 233.479C39.758 207.637 74.5082 130.791 143.14 61.8715C157.705 47.1826 173.268 33.526 189.714 21"
        stroke="url(#paint1_linear_8510_12719)"
        strokeOpacity="0.48"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_8510_12719"
          x1="113.5"
          y1={3}
          x2="113.5"
          y2={223}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C3E7FF" />
          <stop offset={1} stopColor="#CFFCF4" stopOpacity="0.62" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_8510_12719"
          x1={57}
          y1="131.5"
          x2={277}
          y2="131.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C3E7FF" />
          <stop offset={1} stopColor="#CFFCF4" stopOpacity="0.62" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default OrnamentIcon;
