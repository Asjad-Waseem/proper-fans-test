import clsx from "clsx";
import { ButtonI } from "./types";

const Button = ({
  className,
  showIcon,
  icon,
  textClassName,
  text,
}: ButtonI): JSX.Element => {
  return (
    <button
      className={clsx(
        "flex flex-row rounded-[40px] justify-center items-center",
        className
      )}
    >
      {showIcon && icon}
      <p className={clsx("font-semibold", textClassName)}>{text}</p>
    </button>
  );
};

export default Button;
