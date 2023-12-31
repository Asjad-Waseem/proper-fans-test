import { IconPropsI } from "../commonTypes";

const InboxIcon = ({
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
        id="mask0_1_294"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_294)">
        <path
          d="M5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5ZM5 19H19V16H16C15.5 16.6333 14.9043 17.125 14.213 17.475C13.521 17.825 12.7833 18 12 18C11.2167 18 10.4793 17.825 9.788 17.475C9.096 17.125 8.5 16.6333 8 16H5V19ZM12 16C12.6333 16 13.2083 15.8167 13.725 15.45C14.2417 15.0833 14.6 14.6 14.8 14H19V5H5V14H9.2C9.4 14.6 9.75833 15.0833 10.275 15.45C10.7917 15.8167 11.3667 16 12 16Z"
          fill={fill}
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
};

export default InboxIcon;
