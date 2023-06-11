import { Outlet } from "react-router";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import LeftSideIconMenu from "./LeftSideIconMenu";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const BaseLayout = () => {
  const [showLeftSideBar, setShowLeftSideBar] = useState(true);

  const toggleShowLeftSideBar = () => {
    setShowLeftSideBar((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <LeftSideIconMenu
        toggleShowLeftSideBar={toggleShowLeftSideBar}
        showLeftSideBar={showLeftSideBar}
      />

      <LeftSideBar showLeftSideBar={showLeftSideBar} />

      <Outlet />
      <div className="m-2 w-36 rounded-lg bg-black md:block md:w-64">
        <RightSideBar />
      </div>
    </div>
  );
};

export default BaseLayout;
