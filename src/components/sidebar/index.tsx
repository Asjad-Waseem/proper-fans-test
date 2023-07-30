"use client";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MenuIcon from "../icons/Menu";
import { menuItems } from "../../data/menuItems";

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  // const router = useRouter();

  // const activeMenu = useMemo(
  //   () => menuItems.find((menu) => menu.link === router.pathname),
  //   [router.pathname]
  // );

  // const activeMenu = useMemo(
  //   () => menuItems.find((menu) => menu.link === router.location.pathname),
  //   [router.location.pathname]
  // );

  // const activeMenu = useMemo(
  //   () => menuItems.find((menu) => menu.link === useLocation().pathname),
  //   [useLocation().pathname]
  // );

  const activeMenu = { id: 0 };

  const wrapperClasses = clsx(
    "h-screen bg-white shadow-sidebar px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-280px"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = clsx(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu: any) => {
    return clsx(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      // onMouseEnter={onMouseOver}
      // onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex flex-row items-center pl-1 gap-4">
            {isCollapsible && (
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <MenuIcon />
              </button>
            )}
            <span
              className={clsx("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Logo
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }, index) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={index}>
                <Link
                  className="flex py-4 px-3 items-center w-full h-full"
                  href={menu.link}
                >
                  <div style={{ width: "2.5rem" }}>
                    <MenuIcon />
                  </div>
                  {!toggleCollapse && (
                    <span
                      className={clsx("text-md font-medium text-text-light")}
                    >
                      {menu.label}
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <MenuIcon />
        </div>
        {!toggleCollapse && (
          <span className={clsx("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
