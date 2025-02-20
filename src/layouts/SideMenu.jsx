import { Link, NavLink } from "react-router";
import style from "../assets/scss/modules/style.module.scss";
import { useState } from "react";

function SideMenu() {
  const [isActive, setIsActive] = useState(false);

  const menuName = {
    menu1: "workTime",
    menu2: "vacation",
    menu3: "org",
  };

  const handleClickMenu = (menu) => {
    setIsActive((prev) => !prev);
  };

  return (
    <aside>
      <div className="lnb-container admin">
        <h1 className={`lnb-title ${style.fontBold} ${style.bodyMd}`}>관리자</h1>
        <ul className="lnb">
          <li className="lnb-menu">
            <NavLink
              to="/admin/company-info"
              className={({ isActive }) => (isActive ? "lnb-style lnb-menu-item on" : "lnb-style lnb-menu-item")}
            >
              <span>회사정보</span>
            </NavLink>
          </li>
          <li className="lnb-menu" onClick={() => handleClickMenu(menuName.menu1)}>
            <div className="lnb-style lnb-menu-item">
              <span>출퇴근 관리</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11.825L8.825 8L5 4.175L6.18333 3L11.1833 8L6.18333 13L5 11.825Z" fill="#616161" />
              </svg>
            </div>
            <ul className={isActive ? "lnb-submenu active" : "lnb-submenu"}>
              <li>
                <NavLink
                  to="/admin/work-time/state"
                  className={({ isActive }) => (isActive ? "lnb-style lnb-submenu-item on" : "lnb-style lnb-submenu-item")}
                >
                  출퇴근 관리
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/work-time/setting"
                  className={({ isActive }) => (isActive ? "lnb-style lnb-submenu-item on" : "lnb-style lnb-submenu-item")}
                >
                  출퇴근 설정
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="lnb-menu" onClick={() => handleClickMenu(menuName.menu2)}>
            <div className="lnb-style lnb-menu-item">
              <span>근무/휴가 관리</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11.825L8.825 8L5 4.175L6.18333 3L11.1833 8L6.18333 13L5 11.825Z" fill="#616161" />
              </svg>
            </div>
            <ul className="lnb-submenu">
              <li>
                <Link to="" className="lnb-style lnb-submenu-item">
                  하위메뉴
                </Link>
              </li>
              <li>
                <Link to="" className="lnb-style lnb-submenu-item">
                  하위메뉴
                </Link>
              </li>
              <li>
                <Link to="" className="lnb-style lnb-submenu-item">
                  하위메뉴
                </Link>
              </li>
            </ul>
          </li>
          <li className="lnb-menu" onClick={() => handleClickMenu(menuName.menu3)}>
            <div className="lnb-style lnb-menu-item">
              <span>조직원 관리</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11.825L8.825 8L5 4.175L6.18333 3L11.1833 8L6.18333 13L5 11.825Z" fill="#616161" />
              </svg>
            </div>
            <ul className="lnb-submenu">
              <li>
                <Link to="" className="lnb-style lnb-submenu-item">
                  하위메뉴
                </Link>
              </li>
              <li>
                <Link to="" className="lnb-style lnb-submenu-item">
                  하위메뉴
                </Link>
              </li>
              <li>
                <Link to="" className="lnb-style lnb-submenu-item">
                  하위메뉴
                </Link>
              </li>
            </ul>
          </li>
          <li className="lnb-menu">
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "lnb-style lnb-menu-item on" : "lnb-style lnb-menu-item")}
            >
              <span>환경 설정</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="lnb-container my-profile">
        <h1 className="lnb-title font-bold body-md">마이페이지</h1>
        <ul className="lnb">
          <li className="lnb-menu">
            <Link to="/user/profile" className="lnb-style lnb-menu-item">
              <span>프로필</span>
            </Link>
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

export default SideMenu;
