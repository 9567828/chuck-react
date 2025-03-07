import { Link, NavLink, useLocation } from "react-router";
import "../assets/scss/components/header.scss";
import "../assets/scss/components/invite-alarm-modal.scss";
import InviteModal from "./../components/modal/InviteModal";
import AlamModal from "../components/modal/AlamModal";
import { useState } from "react";

function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const menuItems = [
    { id: "1", name: "홈", to: "/" },
    { id: "2", name: "전자결재", to: "/electronic-approval" },
    { id: "4", name: "근태관리", to: "/attendance" },
    { id: "5", name: "일정관리", to: "/schedule" },
    { id: "6", name: "게시판", to: "/board" },
    { id: "7", name: "조직도", to: "/organization" },
    { id: "8", name: "관리자", to: "/admin/company-info" },
  ];

  const openModal = (type) => {
    setIsOpen(true);
    setModalType(type);
  };

  const closeModel = () => {
    setIsOpen(false);
    setModalType(null);
  };

  return (
    <header>
      <nav>
        <button className="tab-menu-btn">
          <img src="/img/gnb/ic_tab-menu.svg" alt="메뉴버튼" />
        </button>
        <div className="nav-left">
          <h1 className="gnb-logo">
            <Link to="/">
              <img src="/img/logo_combination.svg" alt="로고" />
            </Link>
          </h1>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => {
                    const isAdminPath = item.to.includes("/admin");
                    return isActive || (isAdminPath && pathname.includes("/admin")) ? "gnb-menu-btn on" : "gnb-menu-btn";
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-menu">
          <button className="gnb-icon on invite" onClick={() => openModal("invite")}>
            <img src="/img/gnb/ic_invite.svg" alt="초대" />
          </button>
          <button className="gnb-icon alarm" onClick={() => openModal("alarm")}>
            <img src="/img/gnb/ic_alarm.svg" alt="알림" />
          </button>
          <NavLink to="/user/profile" className={({ isActive }) => (isActive ? "avatar-wrap border" : "avatar-wrap")}>
            <img src="/img/202301261737390.jpg" alt="프로필" className="avatar" />
            <span className="first-name">김</span>
          </NavLink>
          <button className="logout">로그아웃</button>
        </div>
      </nav>
      <div className="modal-wrap">
        {isOpen && modalType === "invite" ? <InviteModal closeFn={closeModel} /> : <></>}
        {isOpen && modalType === "alarm" ? <AlamModal closeFn={closeModel} /> : <></>}
      </div>
    </header>
  );
}
export default Header;
