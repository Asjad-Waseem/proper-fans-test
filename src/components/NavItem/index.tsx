import clsx from "clsx";
import Link from "next/link";
import { NavItemI } from "./types";
import { REGULAR_NAV_ITEM, MAIN_NAV_ITEM } from "@/constants";
import { NotificationIcon } from "../icons";

const NavItem = ({
  classes,
  index,
  hrefLink,
  iconDiv,
  itemType,
  itemName,
  handleToggle,
  icon,
  icon2,
  toggleCollapse,
  label,
}: NavItemI): JSX.Element => {
  return (
    <div className={classes} key={index}>
      {itemType === REGULAR_NAV_ITEM ? (
        <Link
          className="flex flex-row justify-between items-center w-[260px] h-[52px] pl-[10px] rounded-[10px] hover: bg-hover-item; active: bg-hover-item;"
          href={hrefLink}
        >
          <div className="flex flex-row">
            <div style={{ width: "2.5rem" }}>{icon}</div>
            {!toggleCollapse && (
              <span className={clsx("text-md font-medium text-text-light")}>
                {label}
              </span>
            )}
          </div>
          {!toggleCollapse && itemName === "properChat" ? (
            <div
              className="flex items-center justify-around	 h-[18px] w-[18px] bg-[rgba(137, 88, 225, 1)] rounded-full"
              style={{ backgroundColor: "rgba(137, 88, 225, 1)" }}
            >
              <p className="text-xs text-white">1</p>
            </div>
          ) : (
            itemName === "accountCenter" && <NotificationIcon />
          )}
        </Link>
      ) : (
        itemType === MAIN_NAV_ITEM && (
          <>
            <div
              className={iconDiv}
              style={{ width: "2.5rem", marginRight: "17px" }}
            >
              <button onClick={handleToggle}>{icon}</button>
            </div>
            {!toggleCollapse && (
              <Link className="mb-[7px]" href={hrefLink}>
                {icon2}
              </Link>
            )}
          </>
        )
      )}
    </div>
  );
};

export default NavItem;
