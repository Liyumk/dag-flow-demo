import { routerType } from "../types/router";
import Home from "../pages/Home";

const routerConfig: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "home",
  },
];

export default routerConfig;
