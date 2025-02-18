import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const CompayInfoPage = lazy(() => import("./../pages/admin/CompayInfoPage"));

const adminRouter = {
  companyInfo: {
    path: "company-info",
    element: (
      <Suspense fallback={<Loading />}>
        <CompayInfoPage />
      </Suspense>
    ),
  },
};

export default adminRouter;
