import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <div className="md:w-64 bg-gray-600 "></div>
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="md:w-64 bg-gray-600"></div>
    </div>
  );
};

export default Layout;
