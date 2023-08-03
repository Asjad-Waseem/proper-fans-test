import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { AddIcon, LiveIcon } from "../icons";
import { StoryI } from "./types";

const Story = ({ index, showActionBtn, src, title }: StoryI): JSX.Element => {
  return (
    <li className="flex flex-col items-center space-y-1">
      <div
        className={clsx(
          "bg-[#00000033] p-0.5 rounded-full",
          index === 0 || index === 4 || index === 5
            ? "bg-[#00000033]"
            : index === 1
            ? "bg-gradient-to-tr from-pink-500 to-red-600"
            : index === 2 ||
              (index === 3 && "bg-gradient-to-tr from-pink-500 to-purple-500"),
          showActionBtn && "relative"
        )}
      >
        <Link
          className="block bg-white p-0.5 rounded-full transform transition hover:-rotate-6"
          href="/"
        >
          <Image
            className="rounded-full"
            src={src}
            alt="story-01-alt"
            height={60}
            width={60}
          />
        </Link>
        {showActionBtn && (
          <button className="absolute bottom-0 right-0 top-10 left-8 rounded-full">
            {index === 0 ? <AddIcon /> : <LiveIcon />}
          </button>
        )}
      </div>
      <Link className="text-xs text-[#999999] text-center" href="/">
        {title}
      </Link>
    </li>
  );
};

export default Story;
