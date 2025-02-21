<<<<<<< HEAD
import { Link } from "react-router";

function SideMenu() {
  return (
    <aside>
      <div className="lnb-container admin">
        <h1 className="lnb-title font-bold body-md">관리자</h1>
        <ul className="lnb">
          <li className="lnb-menu">
            <Link to="/admin/company-info" className="lnb-style lnb-menu-item">
              <span>회사정보</span>
            </Link>
          </li>
          <li className="lnb-menu">
            <div className="lnb-style lnb-menu-item">
              <span>출퇴근 관리</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11.825L8.825 8L5 4.175L6.18333 3L11.1833 8L6.18333 13L5 11.825Z" fill="#616161" />
              </svg>
            </div>
            <ul className="lnb-submenu">
              <li>
                <Link to="/admin/work-time/state" className="lnb-style lnb-submenu-item">
                  출퇴근 관리
                </Link>
              </li>
              <li>
                <Link to="/admin/work-time/setting" className="lnb-style lnb-submenu-item">
                  출퇴근 설정
                </Link>
              </li>
            </ul>
          </li>
          <li className="lnb-menu">
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
          <li className="lnb-menu">
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
            <Link to="" className="lnb-style lnb-menu-item">
              <span>환경 설정</span>
            </Link>
          </li>
=======
import { Link, NavLink } from "react-router";
import style from "../assets/scss/modules/style.module.scss";
import { useState, useEffect } from "react";

function SideMenu() {
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

  const menuItems = [
    { id: "1", name: "회사정보", to: "/admin/company-info" },
    {
      id: "2",
      name: "출퇴근 관리",
      submenu: [
        { id: "1", name: "출퇴근 관리", to: "/admin/work-time/state" },
        { id: "2", name: "출퇴근 설정", to: "/admin/work-time/setting" },
      ],
    },
    {
      id: "3",
      name: "근무/휴가 관리",
      submenu: [
        { id: "1", name: "하위메뉴", to: "/404" },
        { id: "2", name: "하위메뉴", to: "/404" },
      ],
    },
    {
      id: "4",
      name: "조직원 관리",
      submenu: [
        { id: "1", name: "하위메뉴", to: "/404" },
        { id: "2", name: "하위메뉴", to: "/404" },
      ],
    },
    { id: "5", name: "환경설정", to: "/404" },
  ];

  const toggleMenu = (id) => {
    setActiveMenu((prevState) => {
      const newState = {
        ...prevState,
        [id]: !prevState[id], // 기존 상태를 반전시켜서 열기/닫기
      };
      return newState;
    });
  };

  return (
    <aside>
      <div className="lnb-container admin">
        <h1 className={`lnb-title ${style.fontBold} ${style.bodyMd}`}>관리자</h1>
        <ul className="lnb">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="lnb-menu"
              onClick={
                !item.submenu
                  ? null
                  : (e) => {
                      e.stopPropagation();
                      toggleMenu(item.id);
                    }
              }
            >
              {item.to ? (
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? "lnb-style lnb-menu-item on" : "lnb-style lnb-menu-item")}
                >
                  <span>{item.name}</span>
                </NavLink>
              ) : null}
              {item.submenu ? (
                <>
                  <div className="lnb-style lnb-menu-item">
                    <span>{item.name}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 11.825L8.825 8L5 4.175L6.18333 3L11.1833 8L6.18333 13L5 11.825Z" fill="#616161" />
                    </svg>
                  </div>
                  <ul className={activeMenu[item.id] ? "lnb-submenu active" : "lnb-submenu"}>
                    {item.submenu.map((sub) => (
                      <li key={sub.id} onClick={(e) => e.stopPropagation()}>
                        <NavLink
                          to={sub.to}
                          className={({ isActive }) =>
                            isActive ? "lnb-style lnb-submenu-item on" : "lnb-style lnb-submenu-item"
                          }
                        >
                          {sub.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </li>
          ))}
>>>>>>> a36c8db50f2765ec60586b5967f3531a89e5aed2
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
