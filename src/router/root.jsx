import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Loading from "../components/Loading";

const Login = lazy(() => import("../components/account/Login"));
const Join = lazy(() => import("../components/account/Join"));

const root = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loading />}>홈이유</Suspense>,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/join",
    element: (
      <Suspense fallback={<Loading />}>
        <Join />
      </Suspense>
    ),
  },
]);

export default root;
