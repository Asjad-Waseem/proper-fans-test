import React from "react";
import clsx from "clsx";
import { Sidebar, SearchInput, Story, Button, ProfileCard } from "@/components";
import { useGlobalContext } from "../../../context/context";
import { storyItems } from "@/data";
import { NextIcon, EditIcon, PostIcon } from "@/components/icons";

const Feed = () => {
  const [{ toggleSidebar }] = useGlobalContext();
  return (
    <div className="feed-page w-[100%]">
      <Sidebar />
      <div
        className={clsx(
          "flex sm:flex-col lg:flex-row pt-10",
          toggleSidebar
            ? "sm:ml-[64px] lg:ml-[64px]"
            : "sm:ml-[269px] sm:mr-auto lg:ml-[280px] lg:mr-auto"
        )}
      >
        <div className="feed-container flex flex-col ml-auto mr-auto sm:ml-auto sm:mr-auto">
          <SearchInput />
          <ul className="flex mt-10 mb-10 space-x-1.5">
            {storyItems.map((story, index) => {
              const { showActionBtn, src, title } = story;
              return (
                <Story
                  key={index}
                  index={index}
                  showActionBtn={showActionBtn}
                  src={src}
                  title={title}
                />
              );
            })}
            <button className="right-0 top-10 pl-4 rounded-full">
              <NextIcon />
            </button>
          </ul>
          <Button
            className="new-post-btn h-[46px] mb-10"
            showIcon={true}
            icon={<EditIcon />}
            textClassName="text-base text-white"
            text="New Post"
          />
          <PostIcon />
          <PostIcon />
        </div>
        <div className="suggested-creators-container sm:ml-auto sm:mr-auto ml-auto mr-auto lg:ml-[100px]">
          <div className="suggested-creators">
            <p className="text-center pt-3.5 mb-10 text-sm font-semibold text-[#999999]">
              Suggested Creators
            </p>
            <ProfileCard
              index={0}
              hrefLink="/"
              src="/Suggested_Creator_01.svg"
              fullName="Jeremy Stenberg"
              userName="@twitchthis8"
              showCompleteDetails={true}
              showVerifiedIcon={true}
            />
            <ProfileCard
              index={1}
              hrefLink="/"
              src="/Suggested_Creator_02.svg"
              fullName="Axell Hodges"
              userName="@slay96"
              showCompleteDetails={true}
              showVerifiedIcon={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
