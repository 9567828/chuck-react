import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Loading from "../components/Loading";
import joinRouter from "./JoinRouter";
import loginRouter from "./LoginRouter";

const NotFound = lazy(() => import("./../pages/NotFound"));

const root = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loading />}>홈이유</Suspense>,
  },
  {
    path: "/404",
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
  },
  loginRouter.login,
  loginRouter.findId,
  joinRouter.join,
  joinRouter.varify,
]);

export default root;
