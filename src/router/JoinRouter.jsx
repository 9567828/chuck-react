import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const JOIN = "/join";

const JoinPage = lazy(() => import("./../pages/account/JoinPage"));
const VarifyEmailPage = lazy(() => import("./../pages/account/VarifyEmailPage"));
const FindIdPage = lazy(() => import("./../pages/account/FindIdPage"));

const joinRouter = {
  join: {
    path: `${JOIN}`,
    element: (
      <Suspense fallback={<Loading />}>
        <JoinPage />
      </Suspense>
    ),
  },
  varify: {
    path: `${JOIN}/varify-email`,
    element: (
      <Suspense fallback={<Loading />}>
        <VarifyEmailPage />
      </Suspense>
    ),
  },
  findId: {
    path: `${JOIN}/find-id`,
    element: (
      <Suspense fallback={<Loading />}>
        <FindIdPage />
      </Suspense>
    ),
  },
};

export default joinRouter;
