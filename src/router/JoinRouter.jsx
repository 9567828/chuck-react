import { Suspense } from "react";

const Loading = <div>Loading...</div>;

const joinRouter = () => {
  return [
    {
      // path 만들 때 슬래쉬 생략
      path: "",
      element: <Suspense fallback={Loading}></Suspense>,
    },
  ];
};

export default joinRouter;
