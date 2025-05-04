import { Link, NavLink, useLocation } from "react-router";
import "../assets/scss/components/header.scss";
import "../assets/scss/components/invite-alarm-modal.scss";
import InviteModal from "./../components/modal/InviteModal";
import AlamModal from "../components/modal/AlarmModal";
import LogoutModal from "../components/modal/LogoutModal";
import { useEffect, useState } from "react";
import { menuItems } from "./menu-list.js";
import HamburgerMenu from "./HamburgerMenu.jsx";

function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openModal = (type) => {
    if (modalType === type) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
      setModalType(type);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
  };

  const openHamburgerMenu = () => {
    setOpenSideMenu(true);
  };

  const closeHamburgerMenu = () => {
    setOpenSideMenu(false);
  };

  // 태블릿 사이즈가 되면 초대모달 사라지도록
  useEffect(() => {
    const handleModalClose = () => {
      const width = window.innerWidth;
      if (width <= 1439) {
        if (isOpen && modalType === "invite") {
          setIsOpen(false);
          setModalType(null);
        }
      }
    };
    window.addEventListener("resize", handleModalClose);

    return () => window.removeEventListener("resize", handleModalClose);
  }, [isOpen, modalType]);

  return (
    <>
      <HamburgerMenu isOn={openSideMenu} closeFn={closeHamburgerMenu} />
      <header>
        <nav className="main-nav">
          <button className="tab-menu-btn" onClick={openHamburgerMenu}>
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
        {isOpen && modalType === "invite" ? <InviteModal closeFn={closeModal} /> : null}
        {isOpen && modalType === "alarm" ? <AlamModal closeFn={closeModal} /> : null}
        <LogoutModal />
      </header>
    </>
  );
}
export default Header;
