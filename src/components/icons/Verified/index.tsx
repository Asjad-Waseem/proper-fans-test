import { IconPropsI } from "../commonTypes";

const VerifiedIcon = ({ width = 20, height = 20 }: IconPropsI): JSX.Element => {
  return (
    <svg
      className="mt-[0.7px]"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1_231"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_231)">
        <path
          d="M7.16603 18.75L5.58203 16.083L2.56103 15.417L2.87403 12.333L0.832031 10L2.87403 7.667L2.56103 4.583L5.58203 3.917L7.16603 1.25L9.99903 2.458L12.832 1.25L14.416 3.917L17.437 4.583L17.145 7.667L19.166 10L17.145 12.333L17.437 15.417L14.416 16.083L12.832 18.75L9.99903 17.542L7.16603 18.75Z"
          fill="url(#paint0_linear_1_231)"
        />
        <g filter="url(#filter0_d_1_231)">
          <path
            d="M7.17126 14.1668L7.9235 11.0879L5.41699 9.01627L8.71126 8.7385L10.0003 5.8335L11.2894 8.75016L14.5837 9.01627L12.0771 11.0879L12.8294 14.1668L10.0003 12.5346L7.17126 14.1668Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_1_231"
          x="-4.58301"
          y="-0.166504"
          width="29.1667"
          height="28.3333"
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
            result="effect1_dropShadow_1_231"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_231"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_231"
          x1="6.2589"
          y1="-57.7174"
          x2="22.8287"
          y2="-54.2078"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD8DDD" />
          <stop offset="1" stopColor="#8958E1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VerifiedIcon;
