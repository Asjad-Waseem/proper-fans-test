import { IconPropsI } from "../commonTypes";

const EditIcon = ({ width = 36, height = 36 }: IconPropsI): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 28V24H28V28H8Z" fill="white" fillOpacity="0.4" />
      <g filter="url(#filter0_d_1_206)">
        <path
          d="M10 22.0002V18.2502L19.05 9.20018L22.8 12.9502L13.75 22.0002H10ZM23.925 11.8502L20.175 8.10018L21.975 6.30018C22.1583 6.10018 22.3917 6.00418 22.675 6.01218C22.9583 6.02085 23.1917 6.11685 23.375 6.30018L25.725 8.65018C25.9083 8.83351 26 9.06285 26 9.33818C26 9.61285 25.9083 9.85018 25.725 10.0502L23.925 11.8502Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_206"
          x="0"
          y="0.0117188"
          width="36"
          height="35.9885"
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
            result="effect1_dropShadow_1_206"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_206"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default EditIcon;
