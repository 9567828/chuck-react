import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import Loading from "../components/Loading";
import joinRouter from "./JoinRouter";
import loginRouter from "./LoginRouter";
import adminRouter from "./adminRouter";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";

const NotFound = lazy(() => import("./../pages/NotFound"));
const HomePage = lazy(() => import("./../pages/HomePage"));
const ProfilePage = lazy(() => import("../pages/user/ProfilePage"));
const ProfileEditPage = lazy(() => import("../pages/user/ProfileEditPage"));
const SchedulePage = lazy(() => import("../pages/schedule/SchedulePage"));

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
  {
    path: "*",
    element: <Navigate to="/404" replace />,
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
    children: [adminRouter.companyInfo, adminRouter.workState, adminRouter.workSetting],
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
      {
        path: "profile/edit",
        element: (
          <Suspense fallback={<Loading />}>
            <ProfileEditPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/schedule",
    element: (
      <Suspense fallback={<Loading />}>
        <SchedulePage />
      </Suspense>
    ),
  },
]);

export default root;
