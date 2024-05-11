import { CiGrid31 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { SidebarIconProps } from "./types";

const selectedTab = {
  icon: "feed"
}

export const USERTAB_ICONS: SidebarIconProps | any = {
  feed: (
    <CiGrid31
      size={24}
      className={`${
        selectedTab?.icon === "feed" ? "colored-icon" : "gray-icon"
      }`}
    />
  ),
  networking: (
    <CiUser
      size={24}
      className={`${
        selectedTab?.icon === "networking" ? "colored-icon" : "gray-icon"
      }`}
    />
  ),
  video: (
    <CiVideoOn
      size={24}
      className={`${
        selectedTab?.icon === "video" ? "colored-icon" : "gray-icon"
      }`}
    />
  ),
  photo: (
    <CiImageOn
      size={24}
      className={`${
        selectedTab?.icon === "photo" ? "colored-icon" : "gray-icon"
      }`}
    />
  ),
  shop: (
    <CiShop
      size={24}
      className={`${
        selectedTab?.icon === "shop" ? "colored-icon" : "gray-icon"
      }`}
    />
  ),
};
