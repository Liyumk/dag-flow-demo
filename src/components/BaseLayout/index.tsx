import { Outlet } from "react-router";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Droppable from "../Droppable";

const BaseLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="rounded-lg bg-zinc-900 p-2 md:w-12 "></div>
      <div className="m-2 hidden h-fit rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-2 md:block md:w-64">
        <LeftSideBar />
      </div>
      <div className="m-2 flex-1 overflow-hidden rounded-2xl border border-zinc-900 bg-gradient-to-r from-zinc-900 to-zinc-950">
        <Outlet />
      </div>
      <div className="m-2 hidden rounded-lg bg-zinc-900 p-2 md:block md:w-64">
        <RightSideBar />
      </div>
    </div>
  );
};

export default BaseLayout;
