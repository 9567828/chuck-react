import { NavLink, Link } from "react";
import PropTypes from "prop-types";

function LogoutModal({ closeFn }) {
  return (
    <div>
      <button
        className="close-modal"
        onClick={() => {
          if (closeFn) {
            closeFn();
          }
        }}
      >
        <img src="/img/main-icons/ic_cancle_small-24x24.svg" alt="취소" />
      </button>
      <ul>
        <li>
          <NavLink to="/user/profile">
            <span>프로필 변경</span>
          </NavLink>
        </li>
        <li className="lnb-menu">
          <Link to="/logoutProcess" className="logi">
            <span>로그아웃</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LogoutModal;

LogoutModal.propTypes = {
  closeFn: PropTypes.func,
};
