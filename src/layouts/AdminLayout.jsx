import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { useEffect } from "react";

function AdminLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // /admin 접속 시 설정 로그인 안한 상태면 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (pathname === "/admin") {
      navigate({ pathname: "/admin/company-info" });
    }
  });

  return (
    <>
      <Header />
      <div className="page-grid">
        <SideMenu />
        <Outlet />
      </div>
    </>
  );
}

export default AdminLayout;
