import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const JOIN = "/join";

const JoinPage = lazy(() => import("./../pages/account/JoinPage"));
const VerifyEmailPage = lazy(() => import("../pages/account/VerifyEmailPage"));
const SetPwPage = lazy(() => import("./../pages/account/SetPwPage"));
const RequestJoinPage = lazy(() => import("./../pages/account/RequestJoinPage"));

const joinRouter = {
  join: {
    path: `${JOIN}`,
    element: (
      <Suspense fallback={<Loading />}>
        <JoinPage />
      </Suspense>
    ),
  },
  verify: {
    path: `${JOIN}/verify-email`,
    element: (
      <Suspense fallback={<Loading />}>
        <VerifyEmailPage />
      </Suspense>
    ),
  },
  setpw: {
    path: `${JOIN}/set-password`,
    element: (
      <Suspense fallback={<Loading />}>
        <SetPwPage />
      </Suspense>
    ),
  },
  requestJoin: {
    path: `${JOIN}/request-join`,
    element: (
      <Suspense fallback={<Loading />}>
        <RequestJoinPage />
      </Suspense>
    ),
  },
};

export default joinRouter;
