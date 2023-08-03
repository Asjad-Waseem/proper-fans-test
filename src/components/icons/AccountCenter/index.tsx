import { IconPropsI } from "../commonTypes";

const AccountCenterIcon = ({
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
        id="mask0_1_288"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_288)">
        <path
          d="M9.25001 22L8.85001 18.8C8.63335 18.7167 8.42935 18.6167 8.23801 18.5C8.04601 18.3833 7.85835 18.2583 7.67501 18.125L4.70001 19.375L1.95001 14.625L4.52501 12.675C4.50835 12.5583 4.50001 12.4457 4.50001 12.337V11.662C4.50001 11.554 4.50835 11.4417 4.52501 11.325L1.95001 9.375L4.70001 4.625L7.67501 5.875C7.85835 5.74167 8.05001 5.61667 8.25001 5.5C8.45001 5.38333 8.65001 5.28333 8.85001 5.2L9.25001 2H14.75L15.15 5.2C15.3667 5.28333 15.571 5.38333 15.763 5.5C15.9543 5.61667 16.1417 5.74167 16.325 5.875L19.3 4.625L22.05 9.375L19.475 11.325C19.4917 11.4417 19.5 11.554 19.5 11.662V12.337C19.5 12.4457 19.4833 12.5583 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125C16.1417 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.75 22H9.25001ZM12.05 15.5C13.0167 15.5 13.8417 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8417 8.84167 13.0167 8.5 12.05 8.5C11.0667 8.5 10.2373 8.84167 9.56201 9.525C8.88735 10.2083 8.55001 11.0333 8.55001 12C8.55001 12.9667 8.88735 13.7917 9.56201 14.475C10.2373 15.1583 11.0667 15.5 12.05 15.5ZM12.05 13.5C11.6333 13.5 11.2793 13.354 10.988 13.062C10.696 12.7707 10.55 12.4167 10.55 12C10.55 11.5833 10.696 11.2293 10.988 10.938C11.2793 10.646 11.6333 10.5 12.05 10.5C12.4667 10.5 12.821 10.646 13.113 10.938C13.4043 11.2293 13.55 11.5833 13.55 12C13.55 12.4167 13.4043 12.7707 13.113 13.062C12.821 13.354 12.4667 13.5 12.05 13.5ZM11 20H12.975L13.325 17.35C13.8417 17.2167 14.321 17.0207 14.763 16.762C15.2043 16.504 15.6083 16.1917 15.975 15.825L18.45 16.85L19.425 15.15L17.275 13.525C17.3583 13.2917 17.4167 13.0457 17.45 12.787C17.4833 12.529 17.5 12.2667 17.5 12C17.5 11.7333 17.4833 11.4707 17.45 11.212C17.4167 10.954 17.3583 10.7083 17.275 10.475L19.425 8.85L18.45 7.15L15.975 8.2C15.6083 7.81667 15.2043 7.49567 14.763 7.237C14.321 6.979 13.8417 6.78333 13.325 6.65L13 4H11.025L10.675 6.65C10.1583 6.78333 9.67935 6.979 9.23801 7.237C8.79601 7.49567 8.39168 7.80833 8.02501 8.175L5.55001 7.15L4.57501 8.85L6.72501 10.45C6.64168 10.7 6.58335 10.95 6.55001 11.2C6.51668 11.45 6.50001 11.7167 6.50001 12C6.50001 12.2667 6.51668 12.525 6.55001 12.775C6.58335 13.025 6.64168 13.275 6.72501 13.525L4.57501 15.15L5.55001 16.85L8.02501 15.8C8.39168 16.1833 8.79601 16.504 9.23801 16.762C9.67935 17.0207 10.1583 17.2167 10.675 17.35L11 20Z"
          fill={fill}
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
};

export default AccountCenterIcon;
