import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import routerConfig from "./routerConfig";
import { routerType } from "../types/router";
import Layout from "../components/BaseLayout";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ReactFlowProvider } from "reactflow";

const Router = () => {
  const pageRoutes = routerConfig.map(
    ({ path, title, element }: routerType) => {
      return <Route key={title} path={`/${path}`} element={element} />;
    }
  );

  return (
    <BrowserRouter>
      <ReactFlowProvider>
        <DndProvider backend={HTML5Backend}>
          <Routes>
            <Route Component={Layout}>{pageRoutes}</Route>
          </Routes>
        </DndProvider>
      </ReactFlowProvider>
    </BrowserRouter>
  );
};

export default Router;
