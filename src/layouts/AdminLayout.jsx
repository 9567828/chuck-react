import { Outlet } from "react-router";
import Header from "./Header";
import SideMenu from "./SideMenu";

function AdminLayout() {
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
