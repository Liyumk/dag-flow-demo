import { Outlet } from "react-router";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const BaseLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="rounded-lg bg-neutral-900 p-2 md:w-12 "></div>
      <div className="m-2 hidden h-fit rounded-lg bg-neutral-900 p-2 md:block md:w-64">
        <LeftSideBar />
      </div>
      <Outlet />
      <div className="m-2 hidden rounded-lg bg-black md:block md:w-64">
        <RightSideBar />
      </div>
    </div>
  );
};

export default BaseLayout;
