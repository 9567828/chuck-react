import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const JOIN = "/join";

const JoinPage = lazy(() => import("./../pages/account/JoinPage"));
const VarifyEmailPage = lazy(() => import("./../pages/account/VarifyEmailPage"));

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
    // path 만들 때 슬래쉬 생략
    path: `${JOIN}/varify-email`,
    element: (
      <Suspense fallback={<Loading />}>
        <VarifyEmailPage />
      </Suspense>
    ),
  },
};

export default joinRouter;
