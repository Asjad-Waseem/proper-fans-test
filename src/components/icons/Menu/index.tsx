import { MenuIconPropsI } from "./types";

const MenuIcon = ({
  width = 46,
  height = 46,
  fill = "black",
  opacity = 0.2,
}: MenuIconPropsI): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="23" cy="23" r="23" fill="black" fillOpacity="0.04" />
      <g opacity={opacity}>
        <mask
          id="mask0_1_34"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="11"
          y="11"
          width="24"
          height="24"
        >
          <path d="M11 11H35V35H11V11Z" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1_34)">
          <path d="M22 14H14V22H22V14Z" fill={fill} />
          <path d="M32 14H24V22H32V14Z" fill={fill} />
          <path d="M22 24H14V32H22V24Z" fill={fill} />
          <path d="M31 25H25V31H31V25Z" fill={fill} />
        </g>
      </g>
    </svg>
  );
};

export default MenuIcon;
