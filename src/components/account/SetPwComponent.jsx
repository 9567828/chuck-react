import { Link } from "react-router";
import { MessageStyle, Title } from "../common/StyledComponent";
import * as s from "../../assets/scss/modules/style.module.scss";
import PropTypes from "prop-types";
import styled from "styled-components";

const PwForm = styled.form`
  margin-bottom: 105px;
`;

const InputWrap = styled.div`
  margin-bottom: 16px;
`;

function SetPassword({ title }) {
  return (
    <div className="sign-container">
      <Title>{title}</Title>
      <PwForm action="" id="passwordForm">
        <InputWrap>
          <div className="input-password">
            <label htmlFor="password"></label>
            <input
              type="password"
              name=""
              id="password"
              className="input-box"
              placeholder="비밀번호"
              minLength="8"
              maxLength="32"
            />
          </div>
          {/* state 훅으로 메시지 왔다갔다 보여주기 삼항 이용 */}
          <MessageStyle>
            영문 대소문자, 숫자, 특수문자 3가지 이상으로 조합하여
            <br />
            8자 이상 32자 이하로 입력해주세요.
          </MessageStyle>
          <MessageStyle color={"red"}>비밀번호 형식이 잘못 되었습니다.</MessageStyle>
        </InputWrap>
        <div className="password-chk-wrap">
          <label htmlFor="passwordChk"></label>
          <input type="password" name="" id="passwordChk" className="input-box" placeholder="비밀번호 확인" />
        </div>
        <p id="notMatchPw" className="message"></p>
      </PwForm>
      <button id="nextBtn" className="primary-btn long" form="passwordForm" disabled>
        <span>다음</span>
      </button>
      <Link to="/join/verify-email" className={`${s.textBtnMt}`}>
        돌아가기
      </Link>
    </div>
  );
}

export default SetPassword;

SetPassword.propTypes = {
  title: PropTypes.string.isRequired,
};
