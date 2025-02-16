import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const LOGIN = "/login";

const LoginPage = lazy(() => import("./../pages/account/LoginPage"));
const FindIdPage = lazy(() => import("./../pages/account/FindIdPage"));

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
};

export default loginRouter;
