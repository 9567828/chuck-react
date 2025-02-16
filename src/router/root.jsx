import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Loading from "../components/Loading";
import joinRouter from "./JoinRouter";

const LoginPage = lazy(() => import("./../pages/account/LoginPage"));
const NotFound = lazy(() => import("./../pages/NotFound"));

const root = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loading />}>홈이유</Suspense>,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/404",
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
  },
  joinRouter.join,
  joinRouter.varify,
]);

export default root;
