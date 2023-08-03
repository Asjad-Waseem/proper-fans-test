import clsx from "clsx";
import React, { useState } from "react";
import MenuIcon from "../icons/Menu";
import LogoIcon from "../icons/Logo";
import { menuItems, subscribers } from "../../data";
import NavItem from "../NavItem";
import ProfileCard from "../ProfileCard";
import Button from "../Button";

import { useGlobalContext } from "../../../context/context";
import { actionTypes } from "../../../context/reducer";

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [{ toggleSidebar }, dispatch] = useGlobalContext();

  const activeMenu = { id: 0 };

  const wrapperClasses = clsx(
    "fixed h-screen bg-white shadow-sidebar px-4 pt-10 pb-10 bg-light flex justify-between flex-col",
    {
      ["w-280px overflow-y-scroll overflow-x-hidden"]: !toggleCollapse,
      ["w-16"]: toggleCollapse,
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

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
    dispatch({
      type: actionTypes.TOGGLE_SIDEBAR,
      toggleSidebar: !toggleCollapse,
    });
  };

  return (
    <div
      className={wrapperClasses}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <NavItem
            key="01"
            classes={clsx(
              "flex flex-row items-center",
              !toggleCollapse ? "pl-1" : "ml-[-7px]"
            )}
            hrefLink="/"
            itemType="mainNavItem"
            itemName="other"
            handleToggle={handleSidebarToggle}
            icon={<MenuIcon />}
            icon2={<LogoIcon />}
            toggleCollapse={toggleCollapse}
          />
        </div>

        {!toggleCollapse && (
          <p
            className={clsx(
              "text-sm font-normal text-neutral-grey mt-[30px] mb-6 ml-[4px]"
            )}
          >
            Menu
          </p>
        )}
        <div className="flex flex-col items-start ml-[-6px]">
          {menuItems.map(({ icon: Icon, ...menu }, index) => {
            const classes = getNavItemClasses(menu);
            const { itemName, link, label } = menu;
            return (
              <NavItem
                key={index}
                itemType="regularNavItem"
                itemName={itemName}
                classes={classes}
                index={index}
                hrefLink={link}
                icon={Icon}
                toggleCollapse={toggleCollapse}
                label={label}
              />
            );
          })}
        </div>
        {!toggleCollapse && (
          <p
            className={clsx(
              "text-sm font-normal text-neutral-grey mt-[30px] mb-6 ml-[4px]"
            )}
          >
            Subscriptions
          </p>
        )}
        {subscribers.map((subscriber, index) => {
          const { link, src, fullName, userName } = subscriber;
          return (
            <ProfileCard
              key={index}
              index={index}
              hrefLink={link}
              src={src}
              fullName={fullName}
              userName={userName}
              showCompleteDetails={!toggleCollapse ? true : false}
              showVerifiedIcon={true}
            />
          );
        })}

        <div className="mt-[242px]">
          <ProfileCard
            hrefLink="/"
            src="/Avatar3.png"
            fullName="Real Cnosi"
            userName="via Ľubomír Csicsai"
            showCompleteDetails={!toggleCollapse ? true : false}
            showVerifiedIcon={false}
          />
          <Button
            className="options-btn"
            showIcon={false}
            textClassName="text-base text-[#999999]"
            text="Options"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
