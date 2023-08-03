import { IconPropsI } from "../commonTypes";

const NextIcon = ({ width = 46, height = 46 }: IconPropsI): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_313)">
        <circle cx="23" cy="19" r="13" fill="white" />
        <circle cx="23" cy="19" r="12.5" stroke="black" strokeOpacity="0.06" />
      </g>
      <mask
        id="mask0_1_313"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="15"
        y="11"
        width="16"
        height="16"
      >
        <rect
          width="16"
          height="16"
          transform="matrix(-1 0 0 1 31 11)"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_1_313)">
        <path
          d="M26 19L21.3333 14.3333L20.4 15.2667L24.1333 19L20.4 22.7333L21.3333 23.6667L26 19Z"
          fill="black"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_313"
          x="0"
          y="0"
          width="46"
          height="46"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_313"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_313"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default NextIcon;
