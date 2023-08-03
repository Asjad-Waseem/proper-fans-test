import { IconPropsI } from "../commonTypes";

const NotificationIcon = ({
  width = 18,
  height = 18,
  fill = "white",
}: IconPropsI): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="9" fill="#EF4444" />
      <path
        d="M9.82884 4.27273L9.68821 10.4347H8.31605L8.17969 4.27273H9.82884ZM9.00213 13.0938C8.74361 13.0938 8.52202 13.0028 8.33736 12.821C8.15554 12.6392 8.06463 12.4176 8.06463 12.1562C8.06463 11.9006 8.15554 11.6818 8.33736 11.5C8.52202 11.3182 8.74361 11.2273 9.00213 11.2273C9.25497 11.2273 9.47372 11.3182 9.65838 11.5C9.84588 11.6818 9.93963 11.9006 9.93963 12.1562C9.93963 12.3295 9.8956 12.4872 9.80753 12.6293C9.7223 12.7713 9.60866 12.8849 9.46662 12.9702C9.32741 13.0526 9.17259 13.0938 9.00213 13.0938Z"
        fill={fill}
      />
    </svg>
  );
};

export default NotificationIcon;
