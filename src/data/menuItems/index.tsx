import MenuIcon from "../../components/icons/Menu";
import { MenuItemsI } from "./types";

export const menuItems: MenuItemsI[] = [
  { id: 1, label: "Home", icon: <MenuIcon />, link: "/" },
  { id: 2, label: "Manage Posts", icon: <MenuIcon />, link: "/posts" },
  { id: 3, label: "Manage Users", icon: <MenuIcon />, link: "/users" },
  { id: 4, label: "Manage Tutorials", icon: <MenuIcon />, link: "/tutorials" },
];
