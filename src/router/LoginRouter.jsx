import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const LOGIN = "/login";

const LoginPage = lazy(() => import("./../pages/account/LoginPage"));
const FindIdPage = lazy(() => import("./../pages/account/FindIdPage"));
const FindPwPage = lazy(() => import("./../pages/account/FindPwPage"));
const ResetPwPage = lazy(() => import("./../pages/account/ResetPwPage"));

const loginRouter = {
  login: {
    path: `${LOGIN}`,
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  findId: {
    path: `${LOGIN}/find-id`,
    element: (
      <Suspense fallback={<Loading />}>
        <FindIdPage />
      </Suspense>
    ),
  },
  findPw: {
    path: `${LOGIN}/find-pw`,
    element: (
      <Suspense fallback={<Loading />}>
        <FindPwPage />
      </Suspense>
    ),
  },
  resetPw: {
    path: `${LOGIN}/find-pw/reset-password`,
    element: (
      <Suspense fallback={<Loading />}>
        <ResetPwPage />
      </Suspense>
    ),
  },
};

export default loginRouter;
