import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Loading from "../components/Loading";
import joinRouter from "./JoinRouter";
import loginRouter from "./LoginRouter";
import adminRouter from "./adminRouter";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";

const NotFound = lazy(() => import("./../pages/NotFound"));
const HomePage = lazy(() => import("./../pages/HomePage"));
const ProfilePage = lazy(() => import("../pages/user/ProfilePage"));

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <HomePage />
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
  loginRouter.login,
  loginRouter.findId,
  loginRouter.findPw,
  loginRouter.resetPw,
  joinRouter.join,
  joinRouter.verify,
  joinRouter.setpw,
  joinRouter.requestJoin,
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [adminRouter.companyInfo, adminRouter.workState],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loading />}>
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default root;
