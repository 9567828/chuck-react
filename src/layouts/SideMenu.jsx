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
