import { IconPropsI } from "../commonTypes";

const ProperChatIcon = ({
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
        id="mask0_1_300"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path d="M24 0H0V24H24V0Z" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_300)">
        <path
          d="M12.1 4C14.3 4 16.3 4.9 17.8 6.4C19.3 7.9 20 9.9 20 12C20 14.1 19.2 16.1 17.7 17.6L16.7 18.5L17.2 19.7L17.3 19.9H12C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12.1 4ZM12.1 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12.1 22H20.4L19.1 19C20.9 17.2 22 14.7 22 12C22.1 6.5 17.6 2 12.1 2Z"
          fill={fill}
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
};

export default ProperChatIcon;
