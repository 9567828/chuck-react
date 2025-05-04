import PropTypes from "prop-types";
import { NavLink, Link } from "react-router";
import styled from "styled-components";
import * as s from "../../assets/scss/modules/style.module.scss";

const Div = styled.div`
  position: absolute;
  right: 0;
  width: 248px;
  height: 126px;
  border-radius: 20px;
  box-shadow: 2px 4px 4px 0px #0000001a;
  padding: 34px 32px;
  margin-right: 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  @media screen and (max-width: 1439px) {
    margin-right: 20px;
  }
`;

const Li = styled.li`
  margin-top: 16px;
  color: #ff0000;
`;

function ProfileBtnModal({ closeFn }) {
  return (
    <Div>
      <ul>
        <li className={s.captionXsM}>
          <NavLink to="/user/profile">
            <span>프로필 변경</span>
          </NavLink>
        </li>
        <Li className={s.captionXsM}>
          <Link to="/logoutProcess">
            <span>로그아웃</span>
          </Link>
        </Li>
      </ul>
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
    </Div>
  );
}

export default ProfileBtnModal;

ProfileBtnModal.propTypes = {
  closeFn: PropTypes.func,
};
