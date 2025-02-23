import { Link, NavLink } from "react-router";
import * as s from "../assets/scss/modules/style.module.scss";
import { useState, useEffect } from "react";

function ProfileSidemenu() {
  const [activeMenu, setActiveMenu] = useState({});

  // 메뉴 상태 복원
  useEffect(() => {
    const savedState = sessionStorage.getItem("activeMenu");
    if (savedState) {
      setActiveMenu(JSON.parse(savedState));
    }
  }, []);

  // 메뉴 상태 저장
  useEffect(() => {
    sessionStorage.setItem("activeMenu", JSON.stringify(activeMenu));
  }, [activeMenu]);

  return (
    <aside>
      <div className="lnb-container my-profile">
        <h1 className={`lnb-title ${s.fontBold} ${s.bodyMd}`}>마이페이지</h1>
        <ul className="lnb">
          <li className="lnb-menu">
            <NavLink
              to="/user/profile"
              className={({ isActive }) => (isActive ? "lnb-style lnb-menu-item on" : "lnb-style lnb-menu-item")}
            >
              <span>프로필</span>
            </NavLink>
          </li>
          <li className="lnb-menu">
            <Link to="/logoutProcess" className="lnb-style lnb-menu-item">
              <span>로그아웃</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default ProfileSidemenu;
