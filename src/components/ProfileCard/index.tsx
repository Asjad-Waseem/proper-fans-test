import Link from "next/link";
import Image from "next/image";
import { VerifiedIcon } from "../icons";
import { ProfileCardI } from "./types";

const ProfileCard = ({
  index,
  hrefLink,
  src,
  fullName,
  userName,
  showCompleteDetails,
  showVerifiedIcon,
}: ProfileCardI): JSX.Element => {
  return (
    <Link
      key={index}
      className="h-[64px] w-[260px] rounded-[10px] flex flex-row ml-[-1.5px]"
      href={hrefLink}
    >
      <Image
        className="h-[36px]"
        src={src}
        alt="avatar-img"
        width={36}
        height={36}
      />
      {showCompleteDetails && (
        <div className="flex flex-col ml-[14px] mt-[-4px]">
          <div className="flex flex-row">
            <p
              style={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: "600",
                marginRight: "4px",
              }}
            >
              {fullName}
            </p>
            {showVerifiedIcon && <VerifiedIcon />}
          </div>
          <p style={{ color: "#999999", fontSize: "14px", fontWeight: "600" }}>
            {userName}
          </p>
        </div>
      )}
    </Link>
  );
};

export default ProfileCard;
