import { IconPropsI } from "../commonTypes";

const AddIcon = ({ width = 46, height = 46 }: IconPropsI): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Add">
        <g id="Avatar" filter="url(#filter0_d_1_180)">
          <circle cx="23" cy="19" r="13" fill="url(#paint0_linear_1_180)" />
        </g>
        <g id="add">
          <g id="add_2" filter="url(#filter1_d_1_180)">
            <path
              d="M22.3333 24.0001V19.6667H18V18.3333H22.3333V14.0001H23.6667V18.3333H28V19.6667H23.6667V24.0001H22.3333Z"
              fill="white"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_1_180"
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
            result="effect1_dropShadow_1_180"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_180"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1_180"
          x="8"
          y="8.00006"
          width="30"
          height="30"
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
            result="effect1_dropShadow_1_180"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_180"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_180"
          x1="17.696"
          y1="-81.6087"
          x2="41.2842"
          y2="-76.8398"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD8DDD" />
          <stop offset="1" stopColor="#8958E1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AddIcon;
