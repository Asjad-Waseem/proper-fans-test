import {
  FeedIcon,
  DiscoverIcon,
  ProperChatIcon,
  InboxIcon,
  ProfileIcon,
  AccountCenterIcon,
} from "@/components/icons";
import { MenuItemsI } from "./types";

const menuItems: MenuItemsI[] = [
  { id: 1, itemName: "other", label: "Feed", icon: <FeedIcon />, link: "/" },
  {
    id: 2,
    itemName: "other",
    label: "Discover",
    icon: <DiscoverIcon />,
    link: "/",
  },
  {
    id: 3,
    itemName: "properChat",
    label: "Properchat",
    icon: <ProperChatIcon />,
    link: "/",
  },
  { id: 4, itemName: "other", label: "Inbox", icon: <InboxIcon />, link: "/" },
  {
    id: 5,
    itemName: "other",
    label: "Profile",
    icon: <ProfileIcon />,
    link: "/",
  },
  {
    id: 6,
    itemName: "accountCenter",
    label: "Account Center",
    icon: <AccountCenterIcon />,
    link: "/",
  },
];

export default menuItems;
