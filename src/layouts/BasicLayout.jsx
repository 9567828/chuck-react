import { Outlet } from "react-router";
import Header from "./Header";

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default BasicLayout;
