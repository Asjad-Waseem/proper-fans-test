import { IconPropsI } from "../commonTypes";

const FeedIcon = ({
  width = 24,
  height = 24,
  fill = "black",
}: IconPropsI): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1_257"
        style={{ maskType: `alpha` }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path d="M24 0H0V24H24V0Z" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_257)">
        <path d="M9 5V9H5V5H9ZM11 3H3V11H11V3Z" fill={fill} fillOpacity="0.2" />
        <path
          d="M18.9999 5V9H14.9999V5H18.9999ZM20.9999 3H12.9999V11H20.9999V3Z"
          fill={fill}
          fillOpacity="0.2"
        />
        <path
          d="M9 15V19H5V15H9ZM11 13H3V21H11V13Z"
          fill={fill}
          fillOpacity="0.2"
        />
        <path
          d="M18.9999 15V19H14.9999V15H18.9999ZM20.9999 13H12.9999V21H20.9999V13Z"
          fill={fill}
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
};

export default FeedIcon;
