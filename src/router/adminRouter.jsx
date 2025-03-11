import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const CompayInfoPage = lazy(() => import("./../pages/admin/CompayInfoPage"));
const WorkStatePage = lazy(() => import("./../pages/admin/WorkStatePage"));
const WorkSettingPage = lazy(() => import("./../pages/admin/WorkSettingPage"));

const adminRouter = {
  companyInfo: {
    path: "company-info",
    element: (
      <Suspense fallback={<Loading />}>
        <CompayInfoPage />
      </Suspense>
    ),
  },
  workState: {
    path: "work-time/state",
    element: (
      <Suspense fallback={<Loading />}>
        <WorkStatePage />
      </Suspense>
    ),
  },
  workSetting: {
    path: "work-time/setting",
    element: (
      <Suspense fallback={<Loading />}>
        <WorkSettingPage />
      </Suspense>
    ),
  },
};

export default adminRouter;
