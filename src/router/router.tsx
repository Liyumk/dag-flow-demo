import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import routerConfig from "./routerConfig";
import { routerType } from "../types/router";
import Layout from "../components/BaseLayout";

const Router = () => {
  const pageRoutes = routerConfig.map(
    ({ path, title, element }: routerType) => {
      return <Route key={title} path={`/${path}`} element={element} />;
    }
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>{pageRoutes}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
