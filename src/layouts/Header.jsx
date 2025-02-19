import { useState } from "react";
import { Link } from "react-router";

function Header() {
  const [isClick, setIsClick] = useState(false);

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
            <li>
              <Link to="/" className="gnb-menu-btn on">
                홈
              </Link>
            </li>
            <li>
              <Link className="gnb-menu-btn">전자결재</Link>
            </li>
            <li>
              <Link className="gnb-menu-btn">근태관리</Link>
            </li>
            <li>
              <Link className="gnb-menu-btn">일정관리</Link>
            </li>
            <li>
              <Link className="gnb-menu-btn">게시판</Link>
            </li>
            <li>
              <Link className="gnb-menu-btn">조직도</Link>
            </li>
            <li>
              <Link to="/admin/company-info" className="gnb-menu-btn">
                관리자
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile-menu">
          <button className="gnb-icon on invite">
            <img src="/img/gnb/ic_invite.svg" alt="초대" />
          </button>
          <button className="gnb-icon alarm">
            <img src="/img/gnb/ic_alarm.svg" alt="알림" className="gnb-icon alarm" />
          </button>
          <Link to="/user/profile" className="avatar-wrap">
            <img src="/img/202301261737390.jpg" alt="프로필" className="avatar" />
            <span className="first-name">김</span>
          </Link>
          <button className="logout">로그아웃</button>
        </div>
      </nav>
      <div className="modal-wrap">{/* 모달 */}</div>
    </header>
  );
}
export default Header;
