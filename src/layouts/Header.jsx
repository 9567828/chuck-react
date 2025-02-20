import { NavLink } from "react-router";

function Header() {
  const menuItems = [
    { name: "홈", to: "/", id: "home" },
    { name: "전자결재", to: "/electronic-approval", id: "electronic-approval" },
    { name: "근태관리", to: "/attendance", id: "attendance" },
    { name: "일정관리", to: "/schedule", id: "schedule" },
    { name: "게시판", to: "/board", id: "board" },
    { name: "조직도", to: "/organization", id: "organization" },
    { name: "관리자", to: "/admin/company-info", id: "admin" },
  ];

  return (
    <header>
      <nav>
        <button className="tab-menu-btn">
          <img src="/img/gnb/ic_tab-menu.svg" alt="메뉴버튼" />
        </button>
        <div className="nav-left">
          <h1 className="gnb-logo">
            <NavLink to="/">
              <img src="/img/logo_combination.svg" alt="로고" />
            </NavLink>
          </h1>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink to={item.to} className={({ isActive }) => (isActive ? "gnb-menu-btn on" : "gnb-menu-btn")}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-menu">
          <button className="gnb-icon on invite">
            <img src="/img/gnb/ic_invite.svg" alt="초대" />
          </button>
          <button className="gnb-icon alarm">
            <img src="/img/gnb/ic_alarm.svg" alt="알림" className="gnb-icon alarm" />
          </button>
          <NavLink to="/user/profile" className="avatar-wrap">
            <img src="/img/202301261737390.jpg" alt="프로필" className="avatar" />
            <span className="first-name">김</span>
          </NavLink>
          <button className="logout">로그아웃</button>
        </div>
      </nav>
      <div className="modal-wrap">{/* 모달 */}</div>
    </header>
  );
}
export default Header;
