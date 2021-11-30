import React from "react";
import SidebarRow from "../sidebarrow/SidebarRow";
import { useSelector } from "react-redux";
import {
  PlayIcon,
  LibraryIcon,
  UserAddIcon,
  BriefcaseIcon,
  SunIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  const userImage = useSelector((state) => state.user.image);
  const userName = useSelector((state) => state.user.name);
  return (
    <div className="w-1/5 bg-blue-300 h-screen">
      {userImage && <SidebarRow src={userImage} title={userName} />}
      <SidebarRow Icon={PlayIcon} title="Watch" />
      <SidebarRow Icon={LibraryIcon} title="Market" />
      <SidebarRow Icon={UserAddIcon} title="Social" />
      <SidebarRow Icon={BriefcaseIcon} title="Job" />
      <SidebarRow Icon={SunIcon} title="Weather" />
    </div>
  );
};

export default Sidebar;
