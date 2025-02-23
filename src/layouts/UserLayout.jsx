import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "./Header";
import { useEffect } from "react";
import ProfileSidemenu from "./ProfileSideMenu";

function UserLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // /admin 접속 시 설정 로그인 안한 상태면 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (pathname === "/user") {
      navigate({ pathname: "/usre/profile" });
    }
  });

  return (
    <>
      <Header />
      <div className="page-grid">
        <ProfileSidemenu />
        <Outlet />
      </div>
    </>
  );
}

export default UserLayout;
